/**
 * User audit history
 * 用户操作历史数据
 */
export type AuditHistoryDto = {
  /**
   * Id
   */
  id: number;

  /**
   * Kind
   */
  kind: string;

  /**
   * Culture
   */
  culture: string;

  /**
   * Title
   */
  title: string;

  /**
   * Organization id
   */
  organizationId?: number;

  /**
   * Application id
   */
  appId: number;

  /**
   * JSON data
   */
  data?: string;

  /**
   * Creation
   */
  creation: Date | string;
};
