import { AppListRQ } from "./AppListRQ";

/**
 * Application purchased query request data
 * 应用已购买查询请求数据
 */
export type AppPurchasedQueryRQ = AppListRQ & {
  /**
   * Expiry date
   * 过期日期
   */
  expiry?: Date | string;

  /**
   * Expiry days
   * 过期天数
   */
  expiryDays?: number;
};
