import { EntityStatus, IdentityType, UserRole } from "@etsoo/appscript";

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
   * User's avatar
   */
  avatar?: string;

  /**
   * Inviter
   */
  inviter?: string;

  /**
   * Direct reports
   * 直接下属人数
   */
  directReports: number;

  /**
   * Report to
   * 汇报对象
   */
  reportTo?: string;
};
