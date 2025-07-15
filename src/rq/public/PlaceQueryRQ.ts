import { PlaceLocation } from "@etsoo/appscript";

/**
 * API output type
 * API输出类型
 */
export enum ApiOutput {
  JSON,
  XML
}

/**
 * API provider
 * 接口供应商
 */
export enum ApiProvider {
  Google,
  Baidu
}

/**
 * Place query request
 * 地点查询请求
 */
export type PlaceQueryRQ = {
  /**
   * Query input
   * 查询输入
   */
  query: string;

  /**
   * Output type
   * 输出类型
   */
  output?: ApiOutput;

  /**
   * API provider
   * 接口供应商
   */
  provider?: ApiProvider;

  /**
   * Language, like zh-CN
   * 语言
   */
  language?: string;

  /**
   * Region or country id, like CN
   * 地区或国家编号
   */
  region?: string;

  /**
   * Center location
   * 中心位置
   */
  location?: PlaceLocation;

  /**
   * Radius in meters
   * 方圆距离，单位为米
   */
  radius?: number;
};
