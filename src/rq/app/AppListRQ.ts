import { QueryRQ } from "@etsoo/appscript";
import { IdentityType } from "../../dto/IdentityType";

/**
 * Application list request data
 * 应用列表请求数据
 */
export type AppListRQ = QueryRQ & {
  /**
   * Identity type
   * 身份类型
   */
  identityType?: IdentityType;

  /**
   * Require local URL or not
   * 是否需要本地地址
   */
  requireLocalUrl?: boolean;
};
