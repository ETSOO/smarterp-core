import { CoreApiService } from "../../dto/org/CoreApiService";

/**
 * Create API request data
 * 创建接口请求数据
 */
export type OrgCreateApiRQ = {
  /**
   * Organization ID
   * 机构编号
   */
  orgId?: number;

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
  endpoint: string;

  /**
   * App or user ID
   * 程序或用户编号
   */
  appId: string;

  /**
   * App or user secret
   * 程序或用户密钥
   */
  appSecret: string;

  /**
   * JSON options
   * JSON 选项
   */
  options?: string;

  /**
   * Rate policy
   * 频次政策
   */
  ratePolicy?: number;

  /**
   * Enabled or not
   * 是否启用
   */
  enabled?: boolean;

  /**
   * Inheritance or not
   * 是否继承
   */
  inheritance?: boolean;
};
