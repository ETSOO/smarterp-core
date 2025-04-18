import {
  EntityApi,
  IApp,
  IdResultPayload,
  QueryRQ,
  ResultPayload,
  StringIdResultPayload
} from "@etsoo/appscript";
import { IApi, IApiPayload } from "@etsoo/restclient";
import { DeviceListDto } from "./dto/user/DeviceListDto";
import { AuditHistoryRQ } from "./rq/user/AuditHistoryRQ";
import { AuditHistoryDto } from "./dto/user/AuditHistoryDto";
import { AppData } from "./dto/app/AppData";
import { UserIdentifierData } from "./dto/user/UserIdentifierData";
import { ValidateRQ } from "./rq/authCode/ValidateRQ";
import { UserUpdateReadDto } from "./dto/user/UserUpdateReadDto";
import { UserUpdateRQ } from "./rq/user/UserUpdateRQ";

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
   * Add email
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  addEmail(rq: ValidateRQ, payload?: ResultPayload) {
    return this.api.post(`${this.flag}/AddEmail`, rq, payload);
  }

  /**
   * Add mobile
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  addMobile(rq: ValidateRQ, payload?: ResultPayload) {
    return this.api.post(`${this.flag}/AddMobile`, rq, payload);
  }

  /**
   * Get all user identifiers
   * @param payload Payload
   * @returns Result
   */
  allIdentifiers(payload?: IApiPayload<UserIdentifierData[]>) {
    return this.api.post(`${this.flag}/AllIdentifiers`, undefined, payload);
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
   * Check app session
   * @param payload Payload
   * @returns Result
   */
  checkSession(payload?: IdResultPayload) {
    return this.api.post(
      `${this.flag}/CheckSession/${this.app.settings.appId}`,
      undefined,
      payload
    );
  }

  /**
   * Delete user identifier
   * @param id Identifier id
   * @param payload Payload
   * @returns Result
   */
  deleteIdentifier(id: number, payload?: IdResultPayload) {
    return this.api.delete(
      `${this.flag}/DeleteIdentifier/${id}`,
      undefined,
      payload
    );
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
   * Get user's current apps
   * 获取用户当前应用
   * @param payload Payload
   * @returns Result
   */
  getCurrentApps(payload?: IApiPayload<AppData[]>) {
    return this.api.get(`${this.flag}/GetCurrentApps`, undefined, payload);
  }

  /**
   * Get user latest app
   * 获取用户最新应用
   * @param payload Payload
   * @returns Result
   */
  getLatestApp(payload?: IApiPayload<AppData>) {
    return this.api.get("User/GetLatestApp", undefined, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: UserUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update avatar
   * @param data Avatar form data
   * @param payload Payload
   * @returns Result
   */
  updateAvatar(data: FormData, payload?: StringIdResultPayload) {
    payload ??= { config: {} };

    // Credentials for anti-forgery cookie sending
    if (payload.config && payload.config.credentials == null)
      payload.config.credentials = "include";

    return this.api.put(`${this.flag}/UpdateAvatar`, data, payload);
  }

  /**
   * Update read
   * @param payload Payload
   * @returns Result
   */
  updateRead(payload?: IApiPayload<UserUpdateReadDto>) {
    return this.api.get(`${this.flag}/UpdateRead`, undefined, payload);
  }
}
