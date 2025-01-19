import { UserRole } from "@etsoo/appscript";

/**
 * Member invite request data
 * 成员邀请请求数据
 */
export type MemberInviteRQ = {
  /**
   * User role
   * 用户角色
   */
  userRole: UserRole;

  /**
   * Emails
   * 电子信箱
   */
  emails: string[];

  /**
   * Message
   * 留言
   */
  message?: string;

  /**
   * Country or region code, like CN = China
   * 国家或地区编号，如 CN = 中国
   */
  region?: string;

  /**
   * Current's time zone
   * 所在时区
   */
  timeZone?: string;
};
