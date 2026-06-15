/**
 * Organization usage report data
 * 机构使用报告数据
 */
type OrgUsageReportData = {
  /**
   * Period
   * 周期
   */
  period: number;

  /**
   * Qty.
   * 数量
   */
  qty: number;
};

/**
 * Organization amount report data
 * 机构金额报告数据
 */
type OrgAmountReportData = {
  /**
   * Period
   * 周期
   */
  period: number;

  /**
   * Amount
   * 金额
   */
  amount: number;
};

/**
 * Organization report data
 * 机构报告数据
 */
export type OrgReportData = OrgUsageReportData | OrgAmountReportData;
