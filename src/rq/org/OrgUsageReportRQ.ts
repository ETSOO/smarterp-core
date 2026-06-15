/**
 * Organization usage report request data
 * 机构使用报告请求数据
 */
export type OrgUsageReportRQ = {
  /**
   * Organization id
   * 机构编号
   */
  orgId?: number;

  /**
   * Year
   * 年
   */
  year?: number;

  /**
   * Whether to include last year data
   * 是否包含去年数据
   */
  hasLastYear?: boolean;
};
