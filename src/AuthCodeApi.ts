import { BaseApi, IApi, IApp, StringIdResultPayload } from "@etsoo/appscript";
import { SendEmailRQ } from "./rq/authCode/SendEmailRQ";
import { SendSMSRQ } from "./rq/authCode/SendSMSRQ";

/**
 * Auth Code API
 * 验证码接口
 */
export class AuthCodeApi extends BaseApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super(app, api);
  }

  /**
   * Send email
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  sendEmail(rq: SendEmailRQ, payload?: StringIdResultPayload) {
    return this.api.put("AuthCode/SendEmail", rq, payload);
  }

  /**
   * Send email
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  sendSMS(rq: SendSMSRQ, payload?: StringIdResultPayload) {
    return this.api.put("AuthCode/SendSMS", rq, payload);
  }
}
