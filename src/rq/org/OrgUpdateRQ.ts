import { EntityStatus, UpdateModel } from "@etsoo/appscript";

/**
 * Update organization request data
 * 更新机构请求数据
 */
export type OrgUpdateRQ = UpdateModel & {
  /**
   * Organization name
   * 机构名称
   */
  name?: string;

  /**
   * Brand
   * 品牌
   */
  brand?: string;

  /**
   * PIN, unique code
   * PIN，唯一代码
   */
  pin?: string;

  /**
   * Parent id
   * 父级编号
   */
  parentId?: number;

  /**
   * Status
   * 状况
   */
  status?: EntityStatus;

  /**
   * Query keyword
   * 查询关键字
   */
  queryKeyword?: string;
};
