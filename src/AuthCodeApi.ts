import { BaseApi, IApi, IApp, StringIdResultPayload } from "@etsoo/appscript";
import { SendEmailInputRQ, SendEmailRQ } from "./rq/authCode/SendEmailRQ";
import { SendSMSInputRQ, SendSMSRQ } from "./rq/authCode/SendSMSRQ";

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
  sendEmail(rq: SendEmailInputRQ, payload?: StringIdResultPayload) {
    const { deviceId, region } = this.app;
    const data: SendEmailRQ = {
      ...rq,
      deviceId,
      region,
      timezone: this.app.getTimeZone()
    };
    return this.api.put("AuthCode/SendEmail", data, payload);
  }

  /**
   * Send email
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  sendSMS(rq: SendSMSInputRQ, payload?: StringIdResultPayload) {
    const { deviceId, region } = this.app;
    const data: SendSMSRQ = {
      ...rq,
      deviceId,
      region
    };
    return this.api.put("AuthCode/SendSMS", data, payload);
  }
}
