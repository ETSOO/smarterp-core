import { IApi, IApiPayload } from "@etsoo/restclient";
import { MemberListRQ } from "./rq/member/MemberListRQ";
import { MemberQueryRQ } from "./rq/member/MemberQueryRQ";
import { MemberQueryDto } from "./dto/member/MemberQueryDto";
import {
  EntityApi,
  IApp,
  IdResultPayload,
  MsgResultPayload
} from "@etsoo/appscript";
import { MemberListDto } from "./dto/member/MemberListDto";
import { MemberReadDto } from "./dto/member/MemberReadDto";
import { MemberUpdateReadDto } from "./dto/member/MemberUpdateReadDto";
import { MemberUpdateRQ } from "./rq/member/MemberUpdateRQ";
import { MemberInviteRQ } from "./rq/member/MemberInviteRQ";
import { MemberInvitationDto } from "./dto/member/MemberInvitationDto";

/**
 * Member API
 */
export class MemberApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Member", app, api);
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
   * Invite
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  invite(rq: MemberInviteRQ, payload?: MsgResultPayload) {
    return this.api.post(`${this.flag}/Invite`, rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: MemberListRQ, payload: IApiPayload<MemberListDto[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: MemberQueryRQ, payload?: IApiPayload<MemberQueryDto[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<MemberReadDto>) {
    return this.readBase(id, payload);
  }

  /**
   * Read invitation
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  readInvitation(id: string, payload?: IApiPayload<MemberInvitationDto>) {
    return this.api.get(
      `${this.flag}/ReadInvitation/${id}`,
      undefined,
      payload
    );
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: MemberUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }

  /**
   * Update avatar
   * @param id Organization id
   * @param data Avatar form data
   * @param payload Payload
   * @returns Result
   */
  updateAvatar(id: number, data: FormData, payload?: MsgResultPayload) {
    return this.api.put(`${this.flag}/UpdateAvatar/${id}`, data, payload);
  }

  /**
   * Update read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  updateRead(id: number, payload?: IApiPayload<MemberUpdateReadDto>) {
    return this.updateReadBase(id, payload);
  }
}
