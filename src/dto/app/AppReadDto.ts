import { EntityStatus } from "@etsoo/appscript";
import { IdentityType } from "../IdentityType";
import { AppUrl } from "./AppData";

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
   * Local URLs
   */
  localUrls?: AppUrl[];

  /**
   * Expiry
   */
  expiry?: Date | string;

  /**
   * Expiry days
   */
  expiryDays?: number;

  /**
   * Identity type
   * 身份类型
   */
  identityType: IdentityType;

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
