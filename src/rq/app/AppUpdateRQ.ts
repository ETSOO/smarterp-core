import { EntityStatus, UpdateModel } from "@etsoo/appscript";

/**
 * App update request data
 * 应用更新请求数据
 */
export interface AppUpdateRQ extends UpdateModel {
  /**
   * Local name
   * 本地名称
   */
  localName?: string;

  /**
   * Local Web URL
   * 本地网址
   */
  localUrl?: string;

  /**
   * Local help URL
   * 本地帮助网址
   */
  localHelpUrl?: string;

  /**
   * Local APIs
   * 本地接口
   */
  localApis?: string[];

  /**
   * Status
   */
  status?: EntityStatus;
}
