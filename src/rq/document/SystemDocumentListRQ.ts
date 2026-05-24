import { QueryRQ } from "@etsoo/appscript";

/**
 * System Document list request data
 * 系统文档列表请求数据
 */
export type SystemDocumentListRQ = QueryRQ<number> & {
  /**
   * Kind
   * 类型
   */
  kind?: string;

  /**
   * Culture
   * 语言文化
   */
  culture?: string;
};
