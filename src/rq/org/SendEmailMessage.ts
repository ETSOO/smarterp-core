/**
 * Email importance
 * 邮件重要性
 */
export enum EmailImportance {
  Low = "Low",
  Normal = "Normal",
  High = "High"
}

/**
 * Email priority
 * 邮件优先级
 */
export enum EmailPriority {
  NonUrgent = "NonUrgent",
  Normal = "Normal",
  Urgent = "Urgent"
}

/**
 * Send email message
 * 发送邮件消息
 */
export type SendEmailMessage = {
  /**
   * Subject
   * 主题
   */
  subject: string;

  /**
   * Body
   * 内容
   */
  body: string;

  /**
   * Recipients
   * 收件人
   */
  to: string[];

  /**
   * CC
   * 抄送人
   */
  cc?: string[];

  /**
   * BCC
   * 密送人
   */
  bcc?: string[];

  /**
   * Importance
   * 重要性
   */
  importance?: EmailImportance;

  /**
   * Priority
   * 优先级
   */
  priority?: EmailPriority;
};
