import { EntityStatus } from "@etsoo/appscript";

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
   * Status
   */
  status: EntityStatus;
};
