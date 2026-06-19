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
   * Slogan
   */
  slogan?: string;

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

  /**
   * Time zone
   * 时区
   */
  timeZone: string;

  /**
   * User status
   */
  userStatus: EntityStatus;

  /**
   * User expiry
   */
  userExpiry?: string | Date;

  /**
   * Users
   * 用户数
   */
  users: number;

  /**
   * Persons
   * 人员数
   */
  persons: number;
};
