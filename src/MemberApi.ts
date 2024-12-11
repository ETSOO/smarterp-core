import { IApi, IApiPayload } from "@etsoo/restclient";
import { ListType } from "@etsoo/shared";
import { MemberListRQ } from "./rq/member/MemberListRQ";
import { MemberQueryRQ } from "./rq/member/MemberQueryRQ";
import { MemberQueryDto } from "./dto/member/MemberQueryDto";
import { EntityApi, IApp, IdResultPayload } from "@etsoo/appscript";
import { MemberListDto } from "./dto/member/MemberListDto";

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
}
