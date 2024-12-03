import { PlaceLocation } from "./PlaceLocation";

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
   * Postcode, 邮政编码
   */
  postcode?: string;
};
