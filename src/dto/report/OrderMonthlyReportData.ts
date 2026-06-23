/**
 * Order monthly report data
 * 订单月报表数据
 */
export type OrderMonthlyReportData = {
  /**
   * Period
   * 区间
   */
  period: number;

  /**
   * Order Items
   * 订单数
   */
  items: number;

  /**
   * Amount
   * 金额
   */
  amount: number;

  /**
   * Customers
   * 客户数
   */
  customers: number;
};
