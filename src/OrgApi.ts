import { ApiResponseType, IApi, IApiPayload } from "@etsoo/restclient";
import { OrgCreateRQ } from "./rq/org/OrgCreateRQ";
import { OrgUpdateRQ } from "./rq/org/OrgUpdateRQ";
import { OrgQueryRQ } from "./rq/org/OrgQueryRQ";
import { OrgQueryDto } from "./dto/org/OrgQueryDto";
import { OrgReadDto } from "./dto/org/OrgReadDto";
import { OrgUpdateReadDto } from "./dto/org/OrgUpdateReadDto";
import { OrgListDto } from "./dto/org/OrgListDto";
import {
  AntiforgeryRequestToken,
  EntityApi,
  IApp,
  IdResultPayload,
  ResultPayload,
  StringIdResultPayload
} from "@etsoo/appscript";
import { OrgListRQ } from "./rq/org/OrgListRQ";
import { OrgGetMyRQ } from "./rq/org/OrgGetMyRQ";
import { OrgGetMyData } from "./dto/org/OrgGetMyData";
import { OrgDownloadKind } from "./dto/org/OrgDownloadKind";
import { DataTypes } from "@etsoo/shared";
import { SendEmailMessage } from "./rq/org/SendEmailMessage";
import { SendSMSMessage } from "./rq/org/SendSMSMessage";

/**
 * Organization API
 * 机构接口
 */
export class OrgApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Org", app, api);
  }

  /**
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: OrgCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
  }

  /**
   * Delete
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  delete(id: number, payload?: IdResultPayload) {
    return this.deleteBase(id, payload);
  }

  /**
   * Download file
   * @kind Download kind
   * @param id id
   * @param payload Payload
   * @returns Result
   */
  async downloadFile(kind: OrgDownloadKind, id: number): Promise<void> {
    const payload: IApiPayload<ReadableStream> = {
      responseType: ApiResponseType.Stream
    };

    const key = DataTypes.getEnumKey(OrgDownloadKind, kind);

    const result = await this.api.get(
      `${this.flag}/Download${key}File/${id}`,
      undefined,
      payload
    );

    if (result == null || payload.response == null) return;

    const filename =
      this.api.getContentDisposition(payload.response)?.filename ??
      "DownloadFile";

    await this.app.download(result, filename);
  }

  /**
   * Format HTML content
   * @param content HTML content
   * @param payload Payload
   * @returns Result
   */
  formatHtmlContent(content: string, payload?: IApiPayload<string>) {
    return this.api.post(`${this.flag}/FormatHtmlContent`, content, payload);
  }

  /**
   * Get user's latest accessed organizations
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  getMy(rq: OrgGetMyRQ, payload?: IApiPayload<OrgGetMyData[]>) {
    return this.api.post(`${this.flag}/GetMy`, rq, payload);
  }

  /**
   * Leave the organization
   * @param id Organization id
   * @param payload Payload
   * @returns Result
   */
  leave(id: number, payload?: IdResultPayload) {
    return this.api.post(`${this.flag}/Leave/${id}`, undefined, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: OrgListRQ, payload?: IApiPayload<OrgListDto[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: OrgQueryRQ, payload?: IApiPayload<OrgQueryDto[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<OrgReadDto>) {
    return this.readBase(id, payload);
  }

  /**
   * Get Antiforgery request token
   * 获取反伪造请求令牌
   * @param payload Payload
   * @returns Result
   */
  requestToken(payload?: IApiPayload<AntiforgeryRequestToken>) {
    return this.api.get(`${this.flag}/RequestToken`, undefined, payload);
  }

  /**
   * Send email
   * 发送邮件
   * @param message Email message
   * @param payload Payload
   * @returns Result
   */
  sendEmail(message: SendEmailMessage, payload?: StringIdResultPayload) {
    return this.api.post(`${this.flag}/SendEmail`, message, payload);
  }

  /**
   * Send SMS
   * 发送短信
   * @param message SMS message
   * @param payload Payload
   * @returns Result
   */
  sendSMS(message: SendSMSMessage, payload?: StringIdResultPayload) {
    return this.api.post(`${this.flag}/SendSMS`, message, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: OrgUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update avatar
   * @param id Organization id
   * @param data Avatar form data
   * @param payload Payload
   * @returns Result
   */
  updateAvatar(id: number, data: FormData, payload?: StringIdResultPayload) {
    return this.api.put(`${this.flag}/UpdateAvatar/${id}`, data, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<OrgUpdateReadDto>) {
    return this.updateReadBase(id, payload);
  }

  /**
   * Upload profle attachments
   * @param id Profile id
   * @param files Files
   * @param payload Payload
   * @returns Result
   */
  uploadProfileFiles(id: number, files: FileList, payload?: ResultPayload) {
    return this.api.post(
      `${this.flag}/UploadProfileFiles/${id}`,
      files,
      payload
    );
  }
}
