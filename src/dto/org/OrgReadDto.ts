import { EntityStatus } from "@etsoo/appscript";

/**
 * Organization read for view data
 * 机构查看数据
 */
export type OrgReadDto = {
  /**
   * Id
   */
  id: number;

  /**
   * Current user is the owner of the organization
   */
  isOwner: boolean;

  /**
   * Owner name
   */
  ownerName: string;

  /**
   * Name
   */
  name: string;

  /**
   * Brand
   */
  brand?: string;

  /**
   * Logo
   */
  logo?: string;

  /**
   * PIN
   */
  pin?: string;

  /**
   * Parent id
   */
  parentId?: number;

  /**
   * Parent name
   */
  parentName?: string;

  /**
   * Creation
   */
  creation: string | Date;

  /**
   * Status
   */
  status: EntityStatus;

  /**
   * Query Keyword
   */
  queryKeyword?: string;
};
