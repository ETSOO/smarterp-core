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
   * Direct reports
   */
  directReports: number;

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
   * Is editable
   */
  isEditable: boolean;

  /**
   * Creation
   */
  creation: string | Date;
};
