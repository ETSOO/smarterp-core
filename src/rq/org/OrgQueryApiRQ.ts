import { QueryRQ } from "@etsoo/appscript";
import { CoreApiService } from "../../dto/org/CoreApiService";

/**
 * Organization query API request data
 * 机构查询接口请求数据
 */
export type OrgQueryApiRQ = QueryRQ & {
  /**
   * Organization id
   * 机构编号
   */
  orgId?: number;

  /**
   * Service
   * 服务
   */
  service?: CoreApiService;

  /**
   * App or user id
   * 程序或用户编号
   */
  appId?: string;
};
