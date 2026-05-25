/**
 * Document create request data
 * 文档创建请求数据
 */
export type DocumentCreateRQ = {
  /**
   * Kind
   * 类型
   */
  kind: string;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Parameters
   * 参数
   */
  parameters?: unknown;

  /**
   * Template
   * 模板
   */
  template: string;

  /**
   * Cultures
   * 语言文化
   */
  cultures?: string[];
};
