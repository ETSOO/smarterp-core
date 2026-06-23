import { AppActionData } from "@etsoo/appscript";

/**
 * Order daily report request data
 * 订单日报表请求数据
 */
export type OrderDailyReportRQ = {
  /**
   * Action signed data
   * 操作签名数据
   */
  Action: AppActionData;

  /**
   * Start date
   * 开始日期
   */
  StartDate?: string; // DateOnly maps to string (ISO format: YYYY-MM-DD)

  /**
   * Days to cover
   * 覆盖的天数
   */
  Days?: number;
};
