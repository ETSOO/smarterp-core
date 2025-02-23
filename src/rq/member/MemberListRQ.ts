import { StatusQueryRQ, UserRole } from "@etsoo/appscript";

/**
 * Member list request data
 */
export type MemberListRQ = StatusQueryRQ & {
  /**
   * Exclude self user or not
   */
  excludeSelf?: boolean;

  /**
   * User role
   */
  userRole?: UserRole;

  /**
   * User role start
   */
  userRoleStart?: UserRole;

  /**
   * Inviter id
   * 邀请人编号
   */
  inviterId?: number;

  /**
   * Report to
   * 汇报对象
   */
  reportTo?: number;
};
