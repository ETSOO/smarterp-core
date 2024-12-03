import { StatusQueryRQ } from "@etsoo/appscript";

/**
 * Organization Query Request data
 * 机构查询请求数据
 */
export type OrgQueryRQ = StatusQueryRQ & {
  /**
   * PIN
   */
  pin?: string;
};

/**
 * Organization list request data
 * 机构列表请求数据
 */
export type OrgListRQ = StatusQueryRQ & {};
