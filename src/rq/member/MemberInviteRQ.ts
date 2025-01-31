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
};
