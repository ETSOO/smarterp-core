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
};
