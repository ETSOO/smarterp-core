import { DataTypes } from "@etsoo/shared";
import { OrgCreateApiRQ } from "./OrgCreateApiRQ";

/**
 * Update API request data
 * 更新接口请求数据
 */
export type OrgUpdateApiRQ = DataTypes.EditType<OrgCreateApiRQ>;
