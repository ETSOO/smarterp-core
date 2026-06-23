/**
 * Order monthly report query data
 * 订单月报表查询数据
 */
export type OrderMonthlyReportQueryData = {
  /**
   * Id
   * 编号
   */
  id: number;

  /**
   * Period
   * 区间
   */
  period: number;

  /**
   * Order Items
   * 订单项目
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
   * 订单
   */
  customers: number;
};
