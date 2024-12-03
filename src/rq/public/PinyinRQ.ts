export enum PinyinFormatType {
  /**
   * Full Pinyin without tone
   * 不带声调的全拼
   */
  Full,

  /**
   * Initial letter
   * 首字母
   */
  Initial,

  /**
   * Full Pinyin with tone
   * 带声调的全拼
   */
  Tone
}

/**
 * Get Pinyin request data
 * 获取拼音请求数据
 */
export type PinyinRQ = {
  /**
   * Input string
   * 输入的字符串
   */
  input: string;

  /**
   * Return format
   * 返回格式
   */
  format: PinyinFormatType;

  /**
   * Is name
   * 是否为姓名
   */
  isName?: boolean;
};
