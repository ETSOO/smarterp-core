import { AuthCodeAction } from "../../dto/authCode/AuthCodeAction";

/**
 * Send email input request data
 */
export type SendEmailInputRQ = {
  /**
   * Template/action id
   */
  action: AuthCodeAction;

  /**
   * Email address
   */
  email: string;
};

/**
 * Send email request data
 */
export type SendEmailRQ = SendEmailInputRQ & {
  /**
   * Device id
   */
  deviceId: string;

  /**
   * Country or region
   */
  region: string;

  /**
   * Timezone
   */
  timezone: string;
};
