import { QueryRQ } from "@etsoo/appscript";

/**
 * Document list request data
 * 文档列表请求数据
 */
export type DocumentListRQ = QueryRQ<number> & {
  /**
   * Kind
   * 类型
   */
  kind: string;

  /**
   * Culture
   * 语言文化
   */
  culture?: string;

  /**
   * System template or not
   * 系统模板与否
   */
  isSystem?: boolean;
};
