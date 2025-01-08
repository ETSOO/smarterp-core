/**
 * Application renew request data
 * 应用续费请求数据
 */
export type AppRenewRQ = {
  /**
   * Organization application ID
   * 机构应用编号
   */
  id: number;

  /**
   * Months to renew
   * 续费月数
   */
  months: number;
};
