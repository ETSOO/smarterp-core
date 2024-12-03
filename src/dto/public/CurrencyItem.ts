/**
 * Currency item
 * 货币项目
 */
export type CurrencyItem = {
  /**
   * Id, like CNY
   * 编号，如CNY
   */
  id: string;

  /**
   * Name, like Chinese Yuan
   * 名称，如人民币
   */
  name: string;

  /**
   * Native name, like 人民币
   * 原生名
   */
  nativeName: string;

  /**
   * English name, like Chinese Yuan
   * 英文名
   */
  englishName: string;

  /**
   * Symbol, like ¥
   * 货币符号
   */
  symbol: string;
};
