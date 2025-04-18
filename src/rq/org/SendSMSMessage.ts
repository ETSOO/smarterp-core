/**
 * Send SMS message
 * 发送短信消息
 */
export type SendSMSMessage = {
  /**
   * Kind
   * 类型
   */
  kind: string;

  /**
   * Culture
   * 文化
   */
  culture: string;

  /**
   * Region
   * 地区
   */
  region: string;

  /**
   * Mobiles
   * 移动号码
   */
  to: string[];

  /**
   * Template id
   * 模板编号
   */
  templateId?: string;

  /**
   * Body
   * 内容
   */
  body: string;
};
