import { UserRole } from "@etsoo/appscript";

/**
 * Check organization ownership request data
 * 检查机构所有权请求数据
 */
export type OrgOwnsRQ = {
  /**
   * Org id
   * 机构编号
   */
  id: number;

  /**
   * Minimum role
   * 最低角色
   */
  minRole: UserRole;
};
