/**
 * Order daily report data
 * 订单日报表数据
 */
export type OrderDailyReportData = {
  /**
   * Period
   * 区间
   */
  period: string;

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
