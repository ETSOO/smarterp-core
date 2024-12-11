import { OrgListRQ } from "./OrgListRQ";

/**
 * Organization Query Request data
 * 机构查询请求数据
 */
export type OrgQueryRQ = OrgListRQ & {
  /**
   * PIN
   */
  pin?: string;
};
