/**
 * Region data
 * 区域数据
 */
export type RegionData = {
  /**
   * Id, like CN
   * 编号，如CN
   */
  id: string;

  /**
   * Id with 3 characters, like CHN
   * 3字符编号
   */
  id3: string;

  /**
   * Name, like China
   * 名称，如中国
   */
  name: string;

  /**
   * English name, like China
   * 英文名
   */
  englishName: string;

  /**
   * Currency id
   * 货币编号
   */
  currency: string;

  /**
   * Cultures supported
   * 支持的文化
   */
  cultures: string[];
};
