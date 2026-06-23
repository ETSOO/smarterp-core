import { AppActionData, QueryRQ } from "@etsoo/appscript";

/**
 * Order daily report query request
 * 订单日报表查询请求
 */
export type OrderDailyReportQueryRQ = QueryRQ & {
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
