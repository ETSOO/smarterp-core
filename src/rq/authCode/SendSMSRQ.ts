import { AuthCodeAction } from "../../dto/authCode/AuthCodeAction";

/**
 * Send SMS request data
 */
export type SendSMSRQ = {
  /**
   * Device id
   */
  deviceId: string;

  /**
   * Template/action id
   */
  action: AuthCodeAction;

  /**
   * Mobile number
   */
  mobile: string;

  /**
   * Country or region
   */
  region?: string;
};
