import { EntityApi, IApi, IApiPayload, IApp } from "@etsoo/appscript";
import { SystemDocumentListRQ } from "./rq/document/SystemDocumentListRQ";
import { SystemDocumentListData } from "./dto/document/SystemDocumentListData";
import { SystemDocumentViewData } from "./dto/document/SystemDocumentViewData";

/**
 * Document API
 */
export class DocumentApi extends EntityApi {
  /**
   * Constructor
   * @param app Application
   * @param api API
   */
  constructor(app: IApp, api: IApi = app.api) {
    super("Document", app, api);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(
    rq: SystemDocumentListRQ,
    payload: IApiPayload<SystemDocumentListData[]>
  ) {
    return this.listBase(rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<SystemDocumentViewData>) {
    return this.readBase(id, payload);
  }
}
