/**
 * Get user's latest accessed organizations request data
 * 获取用户最近访问的机构请求数据
 */
export type OrgGetMyRQ = {
  /**
   * Check if owns the application
   * 是否拥有应用
   */
  appId?: number;

  /**
   * Max items
   * 最大项数
   */
  maxItems: number;
};
