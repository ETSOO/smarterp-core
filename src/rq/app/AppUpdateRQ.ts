import { EntityStatus, UpdateModel } from "@etsoo/appscript";
import { AppUrl } from "../../dto/app/AppData";

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
   * Local URLs
   * 本地网址
   */
  localUrls?: AppUrl[];

  /**
   * Status
   */
  status?: EntityStatus;
}
