import { CoreApiService } from "./CoreApiService";

/**
 * Organization Query API Data
 * 机构查询 API 数据
 */
export type OrgQueryApiData = {
  /**
   * ID
   * 编号
   */
  id: number;

  /**
   * Service
   * 服务
   */
  service: CoreApiService;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Endpoint URL
   * 端点网址
   */
  endpoint?: string;

  /**
   * App or user ID
   * 程序或用户编号
   */
  appId: string;

  /**
   * Enabled or not
   * 是否启用
   */
  enabled: boolean;

  /**
   * Inheritance or not
   * 是否继承
   */
  inheritance: boolean;

  /**
   * Creation date
   * 创建日期
   */
  creation: Date | string;

  /**
   * Last modified date
   * 最后修改日期
   */
  updatedAt: Date | string;
};
