import { AppActionData, QueryRQ } from "@etsoo/appscript";

/**
 * Order monthly report query request data
 * 订单月报表查询请求数据
 */
export type OrderMonthlyReportQueryRQ = QueryRQ & {
  /**
   * Action signed data
   * 操作签名数据
   */
  action: AppActionData;

  /**
   * Start date
   * 开始日期
   */
  startDate?: string;

  /**
   * End date
   * 结束日期
   */
  endDate?: string;
};
