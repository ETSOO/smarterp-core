import { QueryRQ } from "@etsoo/appscript";

/**
 * Document query request data
 * 文档查询请求数据
 */
export type DocumentQueryRQ = QueryRQ & {
  /**
   * Kind
   * 类型
   */
  kind?: string;

  /**
   * Culture
   * 文化
   */
  culture?: string;

  /**
   * System template or not
   * 是否为系统模板
   */
  isSystem?: boolean;

  /**
   * Has parameters or not
   * 是否有参数
   */
  hasParameters?: boolean;
};
