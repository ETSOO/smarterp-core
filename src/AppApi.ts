import { IApi, IApiPayload } from "@etsoo/restclient";
import { AppData } from "./dto/app/AppData";
import { EntityApi, IApp } from "@etsoo/appscript";

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
   * Get user applications
   * @param payload Payload
   * @returns Result
   */
  getUserApps(payload?: IApiPayload<AppData[]>) {
    return this.api.get(`${this.flag}/GetUserApps`, undefined, payload);
  }
}
