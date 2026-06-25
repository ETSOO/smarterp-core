import { AppActionData } from "@etsoo/appscript";

/**
 * Document generate result request data
 * 文档生成结果请求数据
 */
export type DocumentGenerateRQ = {
  /**
   * Document id
   * 文档编号
   */
  id: number;

  /**
   * Related target id
   * 关联对象编号
   */
  targetId: number;

  /**
   * No cache
   * 禁用缓存
   */
  noCache?: boolean;

  /**
   * Culture
   * 文化
   */
  culture?: string;

  /**
   * Action signed data
   * 操作签名数据
   */
  action: AppActionData;

  /**
   * Additional parameters
   * 更多参数
   */
  data: Record<string, unknown>;
};
