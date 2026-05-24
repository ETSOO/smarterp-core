/**
 * System document view data
 * 系统文档浏览数据
 */
export type SystemDocumentViewData = {
  /**
   * Id
   * 编号
   */
  id: number;
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
   * Refresh time
   * 刷新时间
   */
  refreshTime: Date | string;

  /**
   * Cultures
   * 文化
   */
  cultures?: string[];
};
