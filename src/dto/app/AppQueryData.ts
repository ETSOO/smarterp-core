import { IdentityType } from "../IdentityType";
import { AppUrl } from "./AppData";

/**
 * Application query data
 * 应用查询数据
 */
export type AppQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Name
   * 名称
   */
  name: string;

  /**
   * Local name
   * 本地名称
   */
  localName?: string;

  /**
   * Identity type
   * 身份类型
   */
  identityType: IdentityType;

  /**
   * URLs
   * 网址
   */
  urls: AppUrl[];

  /**
   * Require local URL or not
   * 是否需要本地地址
   */
  requireLocalUrl?: boolean;

  /**
   * Logo
   * 图标
   */
  logo?: string;
};
