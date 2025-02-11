import { EntityStatus, UserRole } from "@etsoo/appscript";
import { IdentityType } from "../IdentityType";

/**
 * Member read for view data
 * 读取成员查看数据
 */
export type MemberReadDto = {
  /**
   * Id
   */
  id: number;

  /**
   * Name
   */
  name: string;

  /**
   * User role
   */
  userRole: UserRole;

  /**
   * Identity type
   */
  identityType: IdentityType;

  /**
   * Custom name
   */
  localName?: string;

  /**
   * Custom avatar
   */
  localAvatar?: string;

  /**
   * Assigned id
   */
  assignedId?: string;

  /**
   * Creation
   */
  creation: string | Date;

  /**
   * Expiry
   */
  expiry?: string | Date;

  /**
   * Refresh time
   */
  refreshTime: string | Date;

  /**
   * Status
   */
  status: EntityStatus;

  /**
   * Inviter
   */
  inviter?: string;
};
