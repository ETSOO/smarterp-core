import { EntityStatus } from "@etsoo/appscript";

/**
 * Create organization request data
 * 创建组织请求数据
 */
export type OrgCreateRQ = {
  /**
   * Organization name
   * 组织名称
   */
  name: string;

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
