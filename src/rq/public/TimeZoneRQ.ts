import { QueryRQ } from "@etsoo/appscript";

export type TimeZoneRQ = QueryRQ<string> & {
  /**
   * Culture, like "en-US", "zh-CN", etc.
   * If not specified, the current culture will be used.
   * 文化
   */
  culture?: string;

  /**
   * All system timezones
   * 所有系统时区
   */
  all?: boolean;
};
