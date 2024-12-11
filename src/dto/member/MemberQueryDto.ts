import { EntityStatus, UserRole } from "@etsoo/appscript";

export type MemberQueryDto = {
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
   * Status
   */
  status: EntityStatus;

  /**
   * Assigned ID
   */
  assignedId?: string;

  /**
   * Is myself
   */
  isSelf: boolean;

  /**
   * Is owner
   */
  isOwner: boolean;

  /**
   * Creation
   */
  creation: string | Date;
};
