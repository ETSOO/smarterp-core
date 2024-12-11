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
   * Title
   */
  title: string;

  /**
   * Device name
   */
  deviceName: string;

  /**
   * JSON data
   */
  data?: string;

  /**
   * Creation
   */
  creation: Date | string;
};
