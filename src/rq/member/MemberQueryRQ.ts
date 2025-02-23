import { MemberListRQ } from "./MemberListRQ";

/**
 * Member query request data
 */
export type MemberQueryRQ = MemberListRQ & {
  /**
   * Assigned ID
   */
  assignedId?: string;

  /**
   * Report to
   * 汇报对象
   */
  reportTo?: number;
};
