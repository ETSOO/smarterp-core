import { OrgResourceItem } from "../../dto/org/OrgResourceItem";

type OrgResourceItemUpdate = OrgResourceItem & {
  /**
   * Updated flag
   * 更新标记
   */
  updatedFlag: number;
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
   * Organization Id, null means global
   * 所属机构，null 表示全局
   */
  orgId?: number | null;

  /**
   * Resource items
   * 资源项
   */
  items?: OrgResourceItemUpdate[];
};
