/**
 * Accept invitation request data
 * 接受邀请请求数据
 */
export type AcceptInvitationRQ = {
  /**
   * Invitation ID
   * 邀请编号
   */
  id: string;

  /**
   * Invitation code
   * 邀请码
   */
  code: string;
};
