/**
 * Member invitation data
 */
export type MemberInvitationDto = {
  /**
   * Email
   */
  email: string;

  /**
   * Inviter's name
   */
  inviter: string;

  /**
   * Organization name
   */
  orgName: string;

  /**
   * Is expired or not
   */
  isExpired: boolean;

  /**
   * Is accepted or not
   */
  isAccepted: boolean;

  /**
   * User exists or not
   */
  userExists: boolean;
};
