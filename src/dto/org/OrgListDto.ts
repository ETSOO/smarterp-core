import { DataTypes } from "@etsoo/shared";

/**
 * Organization list data
 * 机构列表数据
 */
export type OrgListDto = DataTypes.IdNameItem & {
  /**
   * Unique identifier
   * 唯一标识符
   */
  pin?: number;
};
