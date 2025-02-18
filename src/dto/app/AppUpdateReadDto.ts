import { EntityStatus } from "@etsoo/appscript";
import { AppUrl } from "./AppData";

/**
 * App read for update data
 * 应用更新数据
 */
export type AppUpdateReadDto = {
  /**
   * Id
   */
  id: number;

  /**
   * App global name
   */
  name: string;

  /**
   * Local name
   */
  localName?: string;

  /**
   * Local URLs
   */
  localUrls?: AppUrl[];

  /**
   * Status
   */
  status: EntityStatus;
};
