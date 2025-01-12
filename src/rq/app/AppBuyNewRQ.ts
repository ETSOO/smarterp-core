/**
 * Application buy and creating new organization request data
 * 购买应用并创建新机构请求数据
 */
export type AppBuyNewRQ = {
  /**
   * Application ID
   * 应用编号
   */
  id: number;

  /**
   * New organization name
   * 新机构名称
   */
  orgName: string;

  /**
   * New organization PIN
   * 新机构编号
   */
  orgPin?: string;

  /**
   * Region
   * 所在区域
   */
  region: string;
};
