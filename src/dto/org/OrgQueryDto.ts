import { EntityStatus } from "@etsoo/appscript";

/**
 * Organization query data
 * 机构查询数据
 */
export type OrgQueryDto = {
  /**
   * Id
   */
  id: number;

  /**
   * Name
   */
  name: string;

  /**
   * Current user is the owner of the organization
   */
  isOwner: boolean;

  /**
   * Brand
   */
  brand?: string;

  /**
   * Identifier (Tax number)
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
};
