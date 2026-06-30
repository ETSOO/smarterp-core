import { CustomFieldData } from "@etsoo/appscript";

/**
 * Document list data
 * 文档列表数据
 */
export type DocumentListData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Parameters fields
   * 自定义参数字段
   */
  parameters?: CustomFieldData[];
};
