import { OrgResourceItem } from "./OrgResourceItem";

/**
 * Custom resource read for update data
 * 更新自定义资源读取数据
 */
export type OrgUpdateResourceReadData = {
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
   * Organization id
   * 机构编号
   */
  orgId?: number;

  /**
   * Items
   * 项目
   */
  items: OrgResourceItem[];
};
