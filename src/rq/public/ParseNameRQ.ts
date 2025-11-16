/**
 * Parse name request data
 * 解析名称请求数据
 */
export type ParseNameRQ = {
  /**
   * Name
   * 姓名
   */
  name: string;

  /**
   * Family name
   * 姓
   */
  familyName?: string | null;

  /**
   * Given name
   * 名
   */
  givenName?: string | null;
};
