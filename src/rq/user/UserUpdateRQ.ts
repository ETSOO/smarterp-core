import { UpdateModel } from "@etsoo/appscript";

/**
 * Update user request data
 * 更新用户请求数据
 */
export interface UserUpdateRQ extends UpdateModel {
  /**
   * Name
   * 姓名
   */
  name?: string;

  /**
   * Preferred name
   * 首选名字
   */
  preferredName?: string;

  /**
   * Family name
   * 姓
   */
  familyName?: string;

  /**
   * Given name
   * 名
   */
  givenName?: string;

  /**
   * Latin family name
   * 拉丁姓
   */
  latinFamilyName?: string;

  /**
   * Latin given name
   * 拉丁名
   */
  latinGivenName?: string;
}
