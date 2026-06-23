import { BaseApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { OrgUsageReportRQ } from "./rq/report/OrgUsageReportRQ";
import { PeriodReportData } from "./dto/report/PeriodReportData";
import { OrderDailyReportData } from "./dto/report/OrderDailyReportData";
import { OrderDailyReportRQ } from "./rq/report/OrderDailyReportRQ";
import { OrderMonthlyReportRQ } from "./rq/report/OrderMonthlyReportRQ";
import { OrderMonthlyReportData } from "./dto/report/OrderMonthlyReportData";
import { OrderDailyReportQueryRQ } from "./rq/report/OrderDailyReportQueryRQ";
import { OrderDailyReportQueryData } from "./dto/report/OrderDailyReportQueryData";
import { OrderMonthlyReportQueryData } from "./dto/report/OrderMonthlyReportQueryData";
import { OrderMonthlyReportQueryRQ } from "./rq/report/OrderMonthlyReportQueryRQ";

/**
 * Report API
 */
export class ReportApi extends BaseApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super(app, api);
  }

  /**
   * Order daily report
   * 订单日报表
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  orderDailyReport(
    rq: OrderDailyReportRQ,
    payload?: IApiPayload<OrderDailyReportData[]>
  ) {
    return this.api.post("Report/OrderDailyReport", rq, payload);
  }

  /**
   * Order daily report query
   * 订单日报表查询
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  orderDailyReportQuery(
    rq: OrderDailyReportQueryRQ,
    payload?: IApiPayload<OrderDailyReportQueryData[]>
  ) {
    return this.api.post("Report/OrderDailyReportQuery", rq, payload);
  }

  /**
   * Order monthly report
   * 订单月报表
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  orderMonthlyReport(
    rq: OrderMonthlyReportRQ,
    payload?: IApiPayload<OrderMonthlyReportData[]>
  ) {
    return this.api.post("Report/OrderMonthlyReport", rq, payload);
  }

  /**
   * Order monthly report query
   * 订单月报表查询
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  orderMonthlyReportQuery(
    rq: OrderMonthlyReportQueryRQ,
    payload?: IApiPayload<OrderMonthlyReportQueryData[]>
  ) {
    return this.api.post("Report/OrderMonthlyReportQuery", rq, payload);
  }

  /**
   * Get usage report
   * 获取使用报告
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  usageReport(rq: OrgUsageReportRQ, payload?: IApiPayload<PeriodReportData[]>) {
    return this.api.post("Report/UsageReport", rq, payload);
  }
}
