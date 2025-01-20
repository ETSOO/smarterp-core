import { IApi, IApiPayload } from "@etsoo/restclient";
import { DataTypes, ListType, ListType1 } from "@etsoo/shared";
import { PinyinRQ } from "./rq/public/PinyinRQ";
import { CreateBarcodeRQ } from "./rq/public/CreateBarcodeRQ";
import { CurrencyItem } from "./dto/public/CurrencyItem";
import { RegionData } from "./dto/public/RegionData";
import { PlaceQueryRQ } from "./rq/public/PlaceQueryRQ";
import { PlaceCommon } from "./dto/public/PlaceCommon";
import {
  BaseApi,
  Currency,
  IApp,
  ProductUnit,
  RepeatOption
} from "@etsoo/appscript";
import { MemberInvitationDto } from "./dto/public/MemberInvitationDto";

const unitPrefix = "unit";

/**
 * Public API
 * 公共接口
 */
export class PublicApi extends BaseApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super(app, api);
  }

  /**
   * Create barcode
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  createBarcode(rq: CreateBarcodeRQ, payload?: IApiPayload<string>) {
    return this.api.post("Public/CreateBarcode", rq, payload);
  }

  /**
   * Get currency label
   * @param currency Currency
   * @returns Label
   */
  getCurrencyLabel(currency: Currency | string) {
    const c = `currency${currency}`;
    return this.app.get(c) ?? c;
  }

  /**
   * Get currencies
   * @param ids Currency ids to include and order by
   * @param payload Payload
   * @returns Result
   */
  getCurrencies(ids?: string[], payload?: IApiPayload<CurrencyItem[]>) {
    return this.api.post("Public/GetCurrencies", ids, payload);
  }

  /**
   * Get Pinyin
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  getPinyin(rq: PinyinRQ, payload?: IApiPayload<string>) {
    return this.api.post("Public/GetPinyin", rq, payload);
  }

  /**
   * Get regions
   * @param ids Region ids to include and order by
   * @param payload Payload
   * @returns Result
   */
  getRegions(ids?: string[], payload?: IApiPayload<RegionData[]>) {
    return this.api.post("Public/GetRegions", ids, payload);
  }

  /**
   * Get product unit's label
   * Please define the label in culture with key 'unitPC' for ProductUnit.PC like that
   * @param unit Unit
   * @param isJoined Add the join label like 'per Kg' for Kg
   * @returns Label
   */
  getUnitLabel(unit: ProductUnit | number, isJoined?: boolean | string) {
    const key = ProductUnit[unit];
    const label = this.app.get(unitPrefix + key) ?? key;
    const join = this.getUnitJoin(isJoined);
    if (join) {
      return join.format(label);
    }
    return label;
  }

  private getUnitJoin(isJoined: boolean | string | undefined) {
    return typeof isJoined === "string"
      ? this.app.get(isJoined) ?? isJoined
      : isJoined
      ? this.app.get("unitJoin")
      : undefined;
  }

  /**
   * Get mobile base64 QRCode
   * @param id User id
   * @param host Host URL
   * @param payload Payload
   */
  mobileQRCode(id?: string, host?: string, payload?: IApiPayload<string>) {
    return this.api.post("Public/MobileQRCode", { id, host }, payload);
  }

  /**
   * Query place
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryPlace(rq: PlaceQueryRQ, payload?: IApiPayload<PlaceCommon[]>) {
    return this.api.post("Public/QueryPlace", rq, payload);
  }

  /**
   * Read member invitation
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  readInvitation(id: string, payload?: IApiPayload<MemberInvitationDto>) {
    return this.api.get(`Public/ReadInvitation/${id}`, undefined, payload);
  }

  /**
   *
   * Get all repeat options
   * @param options Define the order and limit the items
   * @param isJoined Add the join label
   * @returns Result
   */
  repeatOptions(options?: string[], isJoined: boolean = true): ListType[] {
    options ??= DataTypes.getEnumKeys(RepeatOption);
    return this.units(options, isJoined);
  }

  /**
   * Get all supported cultures
   * @param payload Payload
   * @returns Result
   */
  supportedCultures(payload?: IApiPayload<ListType1[]>) {
    return this.api.get("Public/SupportedCultures", undefined, payload);
  }

  /**
   * Get all product units
   * @returns Units
   */
  units(): ListType[];

  /**
   *
   * Get all product units
   * @param options Define the order and limit the items
   * @param isJoined Add the join label like 'per Kg' for Kg
   * @returns Units
   */
  units(options?: string[], isJoined?: boolean): ListType[];

  /**
   *
   * Get all product units
   * @param options Define the order and limit the items
   * @param isJoined Add the join label like 'per Kg' for Kg
   * @returns Units
   */
  units(options?: string[], isJoined?: boolean | string): ListType[] {
    options ??= DataTypes.getEnumKeys(ProductUnit);
    return options.map((key) => {
      const id = DataTypes.getEnumByKey(ProductUnit, key)! as number;
      return {
        id,
        label: this.getUnitLabel(id, this.getUnitJoin(isJoined)).formatInitial(
          true
        )
      };
    });
  }
}
