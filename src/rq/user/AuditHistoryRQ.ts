import { QueryRQ } from "@etsoo/appscript";

/**
 * Audit history request data
 * 操作历史请求数据
 */
export type AuditHistoryRQ = QueryRQ & {
  /**
   * Device id
   */
  deviceId?: number;

  /**
   * Kind
   */
  kind?: string;

  /**
   * Creation start
   */
  creationStart?: Date | string;

  /**
   * Creation end
   */
  creationEnd?: Date | string;
};
