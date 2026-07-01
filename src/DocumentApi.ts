import {
  EntityApi,
  IApi,
  IApiPayload,
  IApp,
  IdResultPayload
} from "@etsoo/appscript";
import { DocumentListData } from "./dto/document/DocumentListData";
import { DocumentListRQ } from "./rq/document/DocumentListRQ";
import { DocumentReadData } from "./dto/document/DocumentReadData";
import { DocumentCreateRQ } from "./rq/document/DocumentCreateRQ";
import { DocumentQueryRQ } from "./rq/document/DocumentQueryRQ";
import { DocumentQueryData } from "./dto/document/DocumentQueryData";
import { DocumentUpdateRQ } from "./rq/document/DocumentUpdateRQ";
import { DocumentGenerateRQ } from "./rq/document/DocumentGenerateRQ";
import { IActionResult } from "@etsoo/shared";

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
   * Create
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  create(rq: DocumentCreateRQ, payload?: IdResultPayload) {
    return this.createBase(rq, payload);
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
   * Generate document
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  generate(
    rq: DocumentGenerateRQ,
    payload?: IApiPayload<string | IActionResult>
  ) {
    return this.api.post(`${this.flag}/Generate`, rq, payload);
  }

  /**
   * List
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  list(rq: DocumentListRQ, payload?: IApiPayload<DocumentListData[]>) {
    return this.listBase(rq, payload);
  }

  /**
   * Query
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  query(rq: DocumentQueryRQ, payload?: IApiPayload<DocumentQueryData[]>) {
    return this.queryBase(rq, payload);
  }

  /**
   * Read
   * @param id Id
   * @param payload Payload
   * @returns Result
   */
  read(id: number, payload?: IApiPayload<DocumentReadData>) {
    return this.readBase(id, payload);
  }

  /**
   * Update
   * @param rq Request data
   * @param payload Payload
   * @returns Result
   */
  update(rq: DocumentUpdateRQ, payload?: IdResultPayload) {
    return this.updateBase(rq, payload);
  }
}
