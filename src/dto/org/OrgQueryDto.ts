import { EntityStatus, UserRole } from "@etsoo/appscript";

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

  /**
   * Creation
   */
  creation: Date | string;

  /**
   * User role
   * 用户角色
   */
  userRole?: UserRole;

  /**
   * User status
   */
  userStatus: EntityStatus;

  /**
   * Is user expired
   */
  isUserExpired: boolean;

  /**
   * Users
   * 用户数
   */
  users: number;
};
