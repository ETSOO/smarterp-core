import { AppActionData } from "@etsoo/appscript";

/**
 * Order monthly report request data
 * 订单月报表请求数据
 */
export type OrderMonthlyReportRQ = {
  /**
   * Action signed data
   * 操作签名数据
   */
  Action: AppActionData;

  /**
   * Year
   * 年
   */
  Year?: number;

  /**
   * Whether to include last year data
   * 是否包含去年数据
   */
  HasLastYear?: boolean;
};
