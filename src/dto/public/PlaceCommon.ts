import { PlaceLocation } from "@etsoo/appscript";

/**
 * Common place
 * 通用地点
 */
export type PlaceCommon = {
  /**
   * Place id, 地点编号
   */
  placeId: string;

  /**
   * Place name, 地名
   */
  name: string;

  /**
   * Formatted address, 格式化地址
   */
  formattedAddress: string;

  /**
   * Location, 位置
   */
  location?: PlaceLocation;

  /**
   * Region, 地区
   */
  region?: string;

  /**
   * State, 州省
   */
  state?: string;

  /**
   * City, 城市
   */
  city?: string;

  /**
   * District, 区县
   */
  district?: string;

  /**
   * Route, 路线
   */
  route?: string;

  /**
   * Street number, 门牌号
   */
  street?: string;

  /**
   * Postal code, 邮政编码
   */
  postalCode?: string;
};
