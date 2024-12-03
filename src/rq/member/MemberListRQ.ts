import { StatusQueryRQ, UserRole } from "@etsoo/appscript";

/**
 * Member list request data
 */
export type MemberListRQ = StatusQueryRQ & {
  /**
   * Has self user or not
   */
  hasSelf?: boolean;

  /**
   * User role
   */
  userRole?: UserRole;

  /**
   * User role start
   */
  userRoleStart?: UserRole;
};
