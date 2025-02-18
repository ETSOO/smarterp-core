import { IApi, IApiPayload } from "@etsoo/restclient";
import {
  EntityApi,
  IApp,
  IdResultPayload,
  ResultPayload
} from "@etsoo/appscript";
import { AppGetMyRQ } from "./rq/app/AppGetMyRQ";
import { AppQueryData } from "./dto/app/AppQueryData";
import { AppListRQ } from "./rq/app/AppListRQ";
import { AppListDto } from "./dto/app/AppListDto";
import { AppQueryRQ } from "./rq/app/AppQueryRQ";
import { AppPurchasedQueryRQ } from "./rq/app/AppPurchasedQueryRQ";
import { AppPurchasedQueryData } from "./dto/app/AppPurchasedQueryData";
import { AppBuyNewRQ } from "./rq/app/AppBuyNewRQ";
import { AppBuyRQ } from "./rq/app/AppBuyRQ";
import { AppRenewRQ } from "./rq/app/AppRenewRQ";
import { AppUpdateRQ } from "./rq/app/AppUpdateRQ";
import { AppUpdateReadDto } from "./dto/app/AppUpdateReadDto";
import { AppReadDto } from "./dto/app/AppReadDto";
import { CreateApiKeyData } from "./dto/app/CreateApiKeyData";
import { IActionResult } from "@etsoo/shared";
import { AppCreateApiKeyRQ } from "./rq/app/AppCreateApiKeyRQ";
import { AppData } from "./dto/app/AppData";

/**
 * Application API
 */
export class AppApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("App", app, api);
  }

  /**
   * Buy the application
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  buy(rq: AppBuyRQ, payload?: ResultPayload) {
    return this.api.post(`${this.flag}/Buy`, rq, payload);
  }

  /**
   * Buy and create new organization
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  buyNew(rq: AppBuyNewRQ, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/BuyNew`, rq, payload);
  }

  /**
   * Create API key
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  createApiKey(
    rq: AppCreateApiKeyRQ,
    payload?: IApiPayload<IActionResult<CreateApiKeyData>>
  ) {
    return this.api.put(`${this.flag}/CreateApiKey`, rq, payload);
  }

  /**
   * Get user's latest accessed applications
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  getMy(rq: AppGetMyRQ, payload?: IApiPayload<AppData[]>) {
    return this.api.post(`${this.flag}/GetMy`, rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: AppListRQ, payload: IApiPayload<AppListDto[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: AppQueryRQ, payload?: IApiPayload<AppQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Query purchased applications JSON data
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  queryPurchased(
    rq: AppPurchasedQueryRQ,
    payload?: IApiPayload<AppPurchasedQueryData[]>
  ) {
    return this.queryBase(rq, payload, "Purchased");
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<AppReadDto>) {
    return this.readBase(id, payload);
  }

  /**
   * Renew the application
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  renew(rq: AppRenewRQ, payload?: ResultPayload) {
    return this.api.put(`${this.flag}/Renew`, rq, payload);
  }

  /**
   * Update the application
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: AppUpdateRQ, payload?: ResultPayload) {
    return this.api.put(`${this.flag}/Update`, rq, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<AppUpdateReadDto>) {
    return this.updateReadBase(id, payload);
  }
}
