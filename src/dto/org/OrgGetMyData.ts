/**
 * Get user's latest accessed organizations data
 * 获取用户最近访问的机构数据
 */
export type OrgGetMyData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Brand
   * 品牌
   */
  brand?: string;
};
