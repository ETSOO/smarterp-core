import { AuthCodeAction } from "../../dto/authCode/AuthCodeAction";

/**
 * Send email request data
 */
export type SendEmailRQ = {
  /**
   * Device id
   */
  deviceId: string;

  /**
   * Template/action id
   */
  action: AuthCodeAction;

  /**
   * Email address
   */
  email: string;

  /**
   * Country or region
   */
  region?: string;

  /**
   * Timezone
   */
  timezone?: string;
};
