/**
 * Custom resource query data
 * 自定义资源查询数据
 */
export type OrgQueryResourceData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Key
   * 键名
   */
  key: string;

  /**
   * Culture
   * 语言文化
   */
  culture: string;

  /**
   * Organization name
   * 机构名称
   */
  orgName?: string;

  /**
   * Title
   * 标题
   */
  title: string;

  /**
   * Description
   * 描述
   */
  description?: string;
};
