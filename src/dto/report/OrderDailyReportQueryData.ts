/**
 * Order daily report query data
 * 订单日报表查询数据
 */
export type OrderDailyReportQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

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
   * Paid amount
   * 已付款金额
   */
  paidAmount: number;

  /**
   * Discount
   * 折扣
   */
  discount: number;

  /**
   * Line discount
   * 行折扣
   */
  lineDiscount: number;

  /**
   * Approved discount
   * 授权折扣
   */
  approvedDiscount: number;

  /**
   * Qty
   * 数量
   */
  qty: number;

  /**
   * Customers
   * 客户数
   */
  customers: number;
};
