/**
 * Template document kind, the value should not exceed 20 characters
 * 模板文档类型，值不能超过20个字符
 */
export enum DocumentKind {
  /**
   * CMS asset check alert
   * CMS资产检查警告
   */
  CMSASSETCHECKALERT = "CMSASSETCHECKALERT",

  /**
   * CMS asset expiry alert
   * CMS资产过期警告
   */
  CMSASSETEXPIRYALERT = "CMSASSETEXPIRYALERT",

  /**
   * CMS customer data
   * CMS客户数据
   */
  CMSCUSTOMERDATA = "CMSCUSTOMERDATA",

  /**
   * CMS order data
   * CMS订单数据
   */
  CMSORDERDATA = "CMSORDERDATA",

  /**
   * CMS PO data
   * CMS采购数据
   */
  CMSPODATA = "CMSPODATA",

  /**
   * CMS stock data
   * CMS库存数据
   */
  CMSSTOCKDATA = "CMSSTOCKDATA"
}
