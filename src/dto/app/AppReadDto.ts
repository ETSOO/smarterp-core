import { EntityStatus } from "@etsoo/appscript";

/**
 * App read data
 * 应用读取数据
 */
export type AppReadDto = {
  /**
   * Id
   */
  id: number;

  /**
   * App global name
   */
  name: string;

  /**
   * Global app id
   */
  appId: number;

  /**
   * App key
   */
  appKey?: string;

  /**
   * Local name
   */
  localName?: string;

  /**
   * Local URL
   */
  localUrl?: string;

  /**
   * Local help URL
   */
  localHelpUrl?: string;

  /**
   * Local APIs
   */
  localApis?: string[];

  /**
   * Expiry
   */
  expiry?: Date | string;

  /**
   * Expiry days
   */
  expiryDays?: number;

  /**
   * Status
   */
  status: EntityStatus;

  /**
   * Creation
   * 创建时间
   */
  creation: string | Date;
};
