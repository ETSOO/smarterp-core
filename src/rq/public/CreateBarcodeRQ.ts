/**
 * Create Barcode Request data
 * 创建条码请求数据
 */
export type CreateBarcodeRQ = {
  /**
   * Content
   * 内容
   */
  content: string;

  /**
   * Type
   * 类型
   */
  type?: string;

  /**
   * Background color text format
   * 背景色文本格式
   */
  backgroundText?: string;

  /**
   * Foreground color text format
   * 前景色文本格式
   */
  foregroundText?: string;

  /**
   * Width
   * 宽度
   */
  width: number;

  /**
   * Height
   * 高度
   */
  height: number;

  /**
   * Margin
   * 边距
   */
  margin?: number;

  /**
   * Pure barcode, don't put the content string into the output image
   * 纯条码，不将内容字符串放入输出图像
   */
  pureBarcode?: boolean;

  /**
   * GS1 format
   * GS1格式
   */
  gs1Format?: boolean;

  /**
   * No padding
   * 无填充
   */
  noPadding?: boolean;
};
