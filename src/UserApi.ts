import { EntityApi, IApp, MsgResultPayload, QueryRQ } from "@etsoo/appscript";
import { IApi, IApiPayload } from "@etsoo/restclient";
import { DeviceListDto } from "./dto/user/DeviceListDto";
import { AuditHistoryRQ } from "./rq/user/AuditHistoryRQ";
import { AuditHistoryDto } from "./dto/user/AuditHistoryDto";

/**
 * User API
 * 用户接口
 */
export class UserApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("User", app, api);
  }

  /**
   * Audit history
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  auditHistory(rq: AuditHistoryRQ, payload?: IApiPayload<AuditHistoryDto[]>) {
    return this.api.post(`${this.flag}/AuditHistory`, rq, payload);
  }

  /**
   * Device list
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  deviceList(rq: QueryRQ, payload?: IApiPayload<DeviceListDto[]>) {
    return this.api.post(`${this.flag}/DeviceList`, rq, payload);
  }

  /**
   * Update avatar
   * @param data Avatar form data
   * @param payload Payload
   * @returns Result
   */
  updateAvatar(data: FormData, payload?: MsgResultPayload) {
    payload ??= { config: {} };

    // Credentials for anti-forgery cookie sending
    if (payload.config && payload.config.credentials == null)
      payload.config.credentials = "include";

    return this.api.put(`${this.flag}/UpdateAvatar`, data, payload);
  }
}
