/**
 * User read for update data
 * 用户更新读取数据
 */
export type UserUpdateReadDto = {
  /**
   * Id
   */
  id: number;

  /**
   * Name
   */
  name: string;

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
};
