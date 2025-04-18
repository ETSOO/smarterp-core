/**
 * China Pin Data
 * 中国身份证数据
 */
export type ChinaPinData = {
  /**
   * State num id
   * 州省数字编号
   */
  stateNum: string;

  /**
   * City num id
   * 城市数字编号
   */
  cityNum: string;

  /**
   * District number id
   * 区县数字编号
   */
  districtNum: string;

  /**
   * Birthday
   * 出生日期
   */
  birthday: string | Date;

  /**
   * Is female
   * 是否为女性
   */
  isFemale: boolean;
};
