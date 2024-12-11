import { IApi, IApiPayload } from "@etsoo/restclient";
import { EntityApi, IApp } from "@etsoo/appscript";
import { AppGetMyRQ } from "./rq/app/AppGetMyRQ";
import { AppQueryData } from "./dto/app/AppQueryData";
import { AppListRQ } from "./rq/app/AppListRQ";
import { AppListDto } from "./dto/app/AppListDto";
import { AppQueryRQ } from "./rq/app/AppQueryRQ";
import { AppPurchasedQueryRQ } from "./rq/app/AppPurchasedQueryRQ";
import { AppPurchasedQueryData } from "./dto/app/AppPurchasedQueryData";

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
   * Get user's latest accessed applications
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  getMy(rq: AppGetMyRQ, payload?: IApiPayload<AppQueryData[]>) {
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
    return this.queryBase(rq, payload);
  }
}
