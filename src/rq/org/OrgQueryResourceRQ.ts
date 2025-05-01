import { QueryRQ } from "@etsoo/appscript";

/**
 * Organization resource request data
 * 机构资源查询请求数据
 */
export type OrgQueryResourceRQ = QueryRQ & {
  /**
   * Organization Id, null means global
   * 所属机构，null 表示全局
   */
  orgId?: number | null;

  /**
   * Culture
   * 文化
   */
  culture?: string;
};
