import { AuthCodeAction } from "../../dto/authCode/AuthCodeAction";

/**
 * Send SMS input request data
 */
export type SendSMSInputRQ = {
  /**
   * Template/action id
   */
  action: AuthCodeAction;

  /**
   * Mobile number
   */
  mobile: string;
};

/**
 * Send SMS request data
 */
export type SendSMSRQ = SendSMSInputRQ & {
  /**
   * Device id
   */
  deviceId: string;

  /**
   * Country or region
   */
  region?: string;
};
