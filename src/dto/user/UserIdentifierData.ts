import { UserIdentifierType } from "@etsoo/appscript";

/**
 * User identifier data
 * 用户标识数据
 */
export type UserIdentifierData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Type
   * 类型
   */
  type: UserIdentifierType;

  /**
   * Value
   * 值
   */
  value: string;

  /**
   * Creation
   * 登记时间
   */
  creation: Date;
};
