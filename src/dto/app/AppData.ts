/**
 * Application URL
 * 应用网址
 */
export type AppUrl = {
  /**
   * Web URL
   */
  web: string;

  /**
   * API URL
   */
  api: string;

  /**
   * Help URL
   */
  help?: string;
};

/**
 * Application data
 * 程序数据
 */
export type AppData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Application name
   * 程序名称
   */
  name: string;

  /**
   * Local name
   * 本地名称
   */
  localName?: string;

  /**
   * Application URLs
   * 程序网址
   */
  urls: AppUrl[];

  /**
   * Logo
   * 图标
   */
  logo?: string;
};
