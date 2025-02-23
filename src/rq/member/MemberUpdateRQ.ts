import { EntityStatus, UpdateModel, UserRole } from "@etsoo/appscript";

/**
 * Update member request data
 * 更新成员请求数据
 */
export interface MemberUpdateRQ extends UpdateModel {
  /**
   * User role
   * 用户角色
   */
  userRole?: UserRole;

  /**
   * Local name
   * 本地名称
   */
  localName?: string;

  /**
   * Assigned id
   * 分配的编号
   */
  assignedId?: string;

  /**
   * Expiry
   * 过期时间
   */
  expiry?: string | Date;

  /**
   * Status
   * 状况
   */
  status?: EntityStatus;

  /**
   * Report to
   * 汇报对象
   */
  reportTo?: number;
}
