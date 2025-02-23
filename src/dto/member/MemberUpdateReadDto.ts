import { EntityStatus, UserRole } from "@etsoo/appscript";

/**
 * Member read for update data
 * 读取成员更新数据
 */
export type MemberUpdateReadDto = {
  /**
   * Id
   */
  id: number;

  /**
   * Name
   */
  name: string;

  /**
   * Is self
   */
  isSelf: boolean;

  /**
   * User role
   */
  userRole: UserRole;

  /**
   * Custom name
   */
  localName?: string;

  /**
   * Assigned id
   */
  assignedId?: string;

  /**
   * Expiry
   */
  expiry?: string | Date;

  /**
   * Status
   */
  status: EntityStatus;

  /**
   * Report to
   * 汇报对象
   */
  reportTo?: number;
};
