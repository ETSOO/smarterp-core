import { StatusQueryRQ } from "@etsoo/appscript";

/**
 * Organization list request data
 * 机构列表请求数据
 */
export type OrgListRQ = StatusQueryRQ & {
  /**
   * Parent org ID
   * 父级机构编号
   */
  parentId?: number;
};
