import { EntityStatus } from "@etsoo/appscript";
import { AppQueryData } from "./AppQueryData";

/**
 * Application purchased query data
 * 购买的应用查询数据
 */
export type AppPurchasedQueryData = AppQueryData & {
  /**
   * Full name
   * 全名
   */
  fullName: string;

  /**
   * Expiry
   * 到期时间
   */
  expiry?: string | Date;

  /**
   * Expiry days
   * 到期天数
   */
  expiryDays?: number;

  /**
   * Status
   * 状态
   */
  status: EntityStatus;

  /**
   * Creation
   * 创建时间
   */
  creation: string | Date;
};
