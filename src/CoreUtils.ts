import { DataTypes, NumberUtils } from "@etsoo/shared";
import type Ajv from "ajv";
import type { ErrorObject } from "ajv";
import addFormats from "ajv-formats";
import { PeriodReportData } from "./dto/report/PeriodReportData";
import { BusinessUtils, IApp } from "@etsoo/appscript";

/**
 * Core utilities
 */
export namespace CoreUtils {
  /**
   * Get avatar styles
   * 获取头像样式
   * @param isOrg Is this an organization avatar?
   * @returns Styles
   */
  export function avatarStyles(isOrg: boolean = false): React.CSSProperties {
    return {
      width: "160px",
      height: isOrg ? "80px" : "160px",
      border: "1px solid #666"
    };
  }

  /**
   * Get report data
   * 获取报告数据
   * @param data Input data
   * @param year Year to calculate
   * @param selector Selector function or number field to extract value from data
   * @returns Result
   */
  export function getReportDataBase<D extends { period: number }>(
    data: D[],
    year: number,
    selector:
      | ((item: D | undefined | null) => number | undefined | null)
      | DataTypes.Keys<D, number | null | undefined>
  ) {
    const [start, end] = NumberUtils.getMonthPeriodRange(year);
    const items: number[] = [];

    for (let i = start; i <= end; i++) {
      const item = data.find((d) => d.period === i);
      if (typeof selector === "function") {
        items.push(selector(item) ?? 0);
      } else {
        if (item == null) items.push(0);
        else items.push((item[selector] as number) ?? 0);
      }
    }

    return items;
  }

  /**
   * Get report data
   * 获取报告数据
   * @param data Input data
   * @param year Year to calculate
   * @returns Result
   */
  export function getReportData(data: PeriodReportData[], year: number) {
    return getReportDataBase(data, year, "value");
  }

  /**
   * Merge an array with another array, starting from the end
   * 合并数组，从末尾开始
   * @param source Source array
   * @param target Target array
   */
  export function mergeArray(source: string[], target: string[]) {
    for (let i = target.length - 1; i >= 0; i--) {
      const r = source[i];
      if (!source.includes(r)) source.unshift(r);
    }
  }

  /**
   * Transform report data for chart
   * 转换报告数据用于图表
   * @param app App instance
   * @param data Input data
   * @param selector Selector function or number field to extract value from data
   * @param hasLastYear Has last year data
   * @param year Year to calculate, default is current year
   * @returns Transformed report data
   */
  export function transformReportDataBase<D extends { period: number }>(
    app: IApp,
    data: D[],
    selector:
      | ((item: D | undefined | null) => number | undefined | null)
      | DataTypes.Keys<D, number | null | undefined>,
    hasLastYear?: boolean,
    year?: number
  ) {
    year ??= new Date().getFullYear();

    const months = BusinessUtils.getMonths(app.get<string[]>("months") ?? []);
    const labels = months.map((m) => m.label);

    const currentYearData = getReportDataBase(data, year, selector);
    const lastYearData =
      hasLastYear == null || hasLastYear
        ? getReportDataBase(data, year - 1, selector)
        : [];

    return { labels, currentYearData, lastYearData };
  }

  /**
   * Transform report data for chart
   * 转换报告数据用于图表
   * @param app App instance
   * @param data Input data
   * @param hasLastYear Has last year data
   * @param year Year to calculate, default is current year
   * @returns Transformed report data
   */
  export function transformReportData(
    app: IApp,
    data: PeriodReportData[],
    hasLastYear?: boolean,
    year?: number
  ) {
    return transformReportDataBase(app, data, "value", hasLastYear, year);
  }

  let ajv: Ajv | null = null;

  /**
   * Validate JSON input against a schema
   * 验证 JSON 输入是否符合架构
   * @param schema JSON schema to validate against
   * @param input JSON input to validate
   * @returns Result
   */
  export async function validateJson(
    schema: string | object,
    input: string | object | null | undefined
  ): Promise<
    [
      boolean,
      ErrorObject<string, Record<string, any>, unknown>[] | null | undefined
    ]
  > {
    if (ajv == null) {
      const AjvImport = await import("ajv");
      const AjvClass = AjvImport.Ajv ?? AjvImport.default;

      ajv = new AjvClass({
        allErrors: true,
        strictTypes: false
      });

      addFormats(ajv);
    }

    return [
      ajv!.validate(
        typeof schema === "string" ? JSON.parse(schema) : schema,
        typeof input === "string" ? JSON.parse(input) : input
      ),
      ajv!.errors
    ];
  }
}
