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
