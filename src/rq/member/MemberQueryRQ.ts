import { StatusQueryRQ, UserRole } from "@etsoo/appscript";

/**
 * Member query request data
 */
export type MemberQueryRQ = StatusQueryRQ & {
  /**
   * Assigned ID
   */
  assignedId?: string;

  /**
   * User role
   */
  userRole?: UserRole;
};
