import { OrgResourceItem } from "../../dto/org/OrgResourceItem";

type OrgResourceItemUpdate = OrgResourceItem & {
  /**
   * Updated flag
   * 更新标记
   */
  updatedFlag?: number;
};

/**
 * Create resource request data
 * 创建资源请求数据
 */
export type OrgCreateResourceRQ = {
  /**
   * Id
   * 编号
   */
  id?: number;

  /**
   * Key
   * 键名
   */
  key?: string;

  /**
   * Organization Id, 所属机构，undefined means global
   * 所属机构，undefined 表示全局
   */
  orgId?: number;

  /**
   * Resource items
   * 资源项
   */
  items?: OrgResourceItemUpdate[];
};
