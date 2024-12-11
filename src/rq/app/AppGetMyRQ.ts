import { IdentityType } from "../../dto/IdentityType";

/**
 * Get user's latest accessed applications request data
 * 获取用户最近访问的应用请求数据
 */
export type AppGetMyRQ = {
  /**
   * Maximum items
   * 最大项数
   * @default 10
   */
  maxItems?: number;

  /**
   * Identity type
   * 身份类型
   * @default IdentityType.User
   */
  identityType?: IdentityType;
};
