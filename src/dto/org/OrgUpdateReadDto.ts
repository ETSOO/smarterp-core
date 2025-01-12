import { EntityStatus } from "@etsoo/appscript";

/**
 * Organization read for update data
 * 机构更新数据
 */
export type OrgUpdateReadDto = {
  /**
   * Id
   */
  id: number;

  /**
   * Name
   */
  name: string;

  /**
   * Brand
   */
  brand?: string;

  /**
   * PIN
   */
  pin?: string;

  /**
   * Parent Id
   */
  parentId?: number;

  /**
   * Status
   */
  status: EntityStatus;

  /**
   * Query Keyword
   */
  queryKeyword?: string;
};
