import { IApi } from "@etsoo/restclient";
import { MemberApi } from "./MemberApi";
import { OrgApi } from "./OrgApi";
import { AppApi } from "./AppApi";
import { PublicApi } from "./PublicApi";
import { UserApi } from "./UserApi";
import {
  AuthApi,
  BusinessUtils,
  IApp,
  IdentityType,
  IdentityTypeFlags,
  UserIdentifierType
} from "@etsoo/appscript";
import { AuthCodeApi } from "./AuthCodeApi";
import { DataTypes, ListType, ListType1, NumberUtils } from "@etsoo/shared";
import { CoreApiService } from "./dto/org/CoreApiService";
import { DocumentApi } from "./DocumentApi";
import { DocumentKind } from "./dto/document/DocumentKind";
import { ReportApi } from "./ReportApi";
import { PeriodReportData } from "./dto/report/PeriodReportData";

type AppData = { id: number; appId?: number; name: string; localName?: string };

/**
 * Core application interface
 * 核心应用程序接口
 */
export interface ICoreApp {
  /**
   * Application API
   */
  readonly appApi: AppApi;

  /**
   * Authentication API
   */
  readonly authApi: AuthApi;

  /**
   * Auth code API
   */
  readonly authCodeApi: AuthCodeApi;

  /**
   * Document API
   */
  readonly documentApi: DocumentApi;

  /**
   * Member API
   */
  readonly memberApi: MemberApi;

  /**
   * Organization API
   */
  readonly orgApi: OrgApi;

  /**
   * Public API
   */
  readonly publicApi: PublicApi;

  /**
   * Report API
   */
  readonly reportApi: ReportApi;

  /**
   * User API
   */
  readonly userApi: UserApi;

  /**
   * Get API service label
   * 获取API服务标签
   * @param service API service
   * @returns Result
   */
  getApiService(service?: CoreApiService): string;

  /**
   * Get API services
   * 获取API服务列表
   * @returns List of API services
   */
  getApiServices(): ListType[];

  /**
   * Get app name
   * 获取应用名称
   * @param data App data
   * @returns Name
   */
  getAppName(data: AppData): string;

  /**
   * Get document kind label
   * 获取文档类型标签
   * @param kind Kind
   * @returns Label
   */
  getDocumentKind(kind?: DocumentKind | string): string | undefined;

  /**
   * Get document kinds
   * 获取文档类型列表
   * @returns List
   */
  getDocumentKinds(): ListType1[];

  /**
   * Get user identifier type label
   * 获取用户标识类型标签
   * @param type Type
   * @returns Label
   */
  getIdentifierTypeLabel(type: UserIdentifierType): string;

  /**
   * Get identity label
   * 获取身份标签
   * @param identity Identity value
   * @param joinChar Join character
   * @returns Label(s)
   */
  getIdentityLabel(
    identity: IdentityType | null | undefined,
    joinChar?: string
  ): string;

  /**
   * Get identity label
   * 获取身份标签
   * @param identity Identity value
   * @param joinChar Join character
   * @returns Label(s)
   */
  getIdentityFlagsLabel(
    identity: IdentityTypeFlags | null | undefined,
    joinChar?: string
  ): string;

  /**
   * Get identities
   * 获取身份列表
   * @param identity Identity value combined
   * @returns List
   */
  getIdentities(identity?: number): ListType[];

  /**
   * Get identity flags
   * 获取身份标志组合
   * @param identity Identity value combined or true for items other than None
   * @returns List
   */
  getIdentityFlags(identity?: number | true): ListType[];

  /**
   * Get report data
   * 获取报告数据
   * @param data Input data
   * @param year Year to calculate
   * @returns Result
   */
  getReportData(data: PeriodReportData[], year: number): number[];

  /**
   * Transform report data for chart
   * 转换报告数据用于图表
   * @param data Input data
   * @param hasLastYear Has last year data
   * @param year Year to calculate, default is current year
   * @returns Transformed report data
   */
  transformReportData(
    data: PeriodReportData[],
    hasLastYear?: boolean,
    year?: number
  ): {
    labels: string[];
    currentYearData: number[];
    lastYearData: number[];
  };
}

/**
 * Core application
 * 核心应用程序
 */
export class CoreApp implements ICoreApp {
  private _appApi?: AppApi;
  /**
   * Application API
   * 应用程序接口
   */
  get appApi() {
    return (this._appApi ??= new AppApi(this.app, this.api));
  }

  private _authApi?: AuthApi;
  /**
   * Authentication API
   * 认证接口
   */
  get authApi() {
    return (this._authApi ??= new AuthApi(this.app, this.api));
  }

  private _authCodeApi?: AuthCodeApi;
  /**
   * Authentication API
   * 认证接口
   */
  get authCodeApi() {
    return (this._authCodeApi ??= new AuthCodeApi(this.app, this.api));
  }

  private _documentApi?: DocumentApi;
  /**
   * Document API
   * 文档接口
   */
  get documentApi() {
    return (this._documentApi ??= new DocumentApi(this.app, this.api));
  }

  private _memberApi?: MemberApi;
  /**
   * Member API
   * 会员接口
   */
  get memberApi() {
    return (this._memberApi ??= new MemberApi(this.app, this.api));
  }

  private _orgApi?: OrgApi;
  /**
   * Organization API
   * 机构接口
   */
  get orgApi() {
    return (this._orgApi ??= new OrgApi(this.app, this.api));
  }

  private _publicApi?: PublicApi;
  /**
   * Public API
   * 公共接口
   */
  get publicApi() {
    return (this._publicApi ??= new PublicApi(this.app, this.api));
  }

  private _reportApi?: ReportApi;
  /**
   * Report API
   * 报告接口
   */
  get reportApi() {
    return (this._reportApi ??= new ReportApi(this.app, this.api));
  }

  private _userApi?: UserApi;
  /**
   * User API
   * 用户接口
   */
  get userApi() {
    return (this._userApi ??= new UserApi(this.app, this.api));
  }

  /**
   * Constructor
   * 构造函数
   * @param app Base application
   * @param api API
   */
  constructor(
    public readonly app: IApp,
    public readonly api: IApi
  ) {}

  /**
   * Get API service label
   * 获取API服务标签
   * @param service API service
   * @returns Result
   */
  getApiService(service?: CoreApiService) {
    if (service == null) return "";

    const key = DataTypes.getEnumKey(CoreApiService, service) ?? `${service}`;
    return this.app.get(`apiService${key}`) ?? key;
  }

  /**
   * Get API services
   * 获取API服务列表
   * @returns List of API services
   */
  getApiServices() {
    return this.app.getEnumList(CoreApiService, "apiService");
  }

  /**
   * Get app name
   * 获取应用名称
   * @param data App data
   * @returns Name
   */
  getAppName(data: AppData) {
    return (
      data.localName ?? this.app.get(`app${data.appId ?? data.id}`) ?? data.name
    );
  }

  /**
   * Get document kind label
   * 获取文档类型标签
   * @param kind Kind
   * @returns Label
   */
  getDocumentKind(kind?: DocumentKind | string) {
    if (kind == null) return undefined;

    const key = typeof kind === "string" ? kind : DocumentKind[kind];
    return this.app.get("template" + key) ?? key;
  }

  /**
   * Get document kinds
   * 获取文档类型列表
   * @returns List
   */
  getDocumentKinds() {
    return this.app.getEnumStrList(DocumentKind, "template");
  }

  /**
   * Get user identifier type label
   * 获取用户标识类型标签
   * @param type Type
   * @returns Label
   */
  getIdentifierTypeLabel(type: UserIdentifierType) {
    const key = DataTypes.getEnumKey(UserIdentifierType, type) ?? `${type}`;
    return this.app.get(`uiType${key}`) ?? key;
  }

  /**
   * Get identity label
   * 获取身份标签
   * @param identity Identity value
   * @param joinChar Join character
   * @returns Label(s)
   */
  getIdentityLabel(
    identity: IdentityType | null | undefined,
    joinChar?: string
  ) {
    if (identity == null) return "";

    joinChar ??= ", ";

    const identities = this.getIdentities(identity);
    return identities.map((r) => r.label).join(joinChar);
  }

  /**
   * Get identity flags label
   * 获取身份组合标签
   * @param identity Identity value
   * @param joinChar Join character
   * @returns Label(s)
   */
  getIdentityFlagsLabel(
    identity: IdentityTypeFlags | null | undefined,
    joinChar?: string
  ) {
    if (identity == null) return "";

    joinChar ??= ", ";

    const identities = this.getIdentityFlags(identity);

    return identities
      .filter((r) => r.id > 0)
      .map((r) => r.label)
      .join(joinChar);
  }

  /**
   * Get identities
   * 获取身份列表
   * @param identity Identity value combined
   * @returns List
   */
  getIdentities(identity?: number) {
    if (identity == null) return this.app.getEnumList(IdentityType, "id");
    return this.app.getEnumList(IdentityType, "id", (id, _key) => {
      if ((id & identity) > 0) return id;
    });
  }

  /**
   * Get identity flags
   * 获取身份标志组合
   * @param identity Identity value combined or true for items other than None
   * @returns List
   */
  getIdentityFlags(identity?: number | true) {
    if (identity == null) return this.app.getEnumList(IdentityTypeFlags, "id");

    if (identity === true) {
      return this.app.getEnumList(IdentityTypeFlags, "id", (id, _key) => {
        if (id > 0) return id;
      });
    }

    if (identity === 0) return [];

    // When identity exists, includes the None item
    return this.app.getEnumList(IdentityTypeFlags, "id", (id, _key) => {
      if (id === 0 || (id & identity) > 0) return id;
    });
  }

  /**
   * Get report data
   * 获取报告数据
   * @param data Input data
   * @param year Year to calculate
   * @returns Result
   */
  getReportData(data: PeriodReportData[], year: number) {
    const [start, end] = NumberUtils.getMonthPeriodRange(year);
    const items: number[] = [];

    for (let i = start; i <= end; i++) {
      const item = data.find((d) => d.period === i);
      items.push(item?.value ?? 0);
    }

    return items;
  }

  /**
   * Transform report data for chart
   * 转换报告数据用于图表
   * @param data Input data
   * @param hasLastYear Has last year data
   * @param year Year to calculate, default is current year
   * @returns Transformed report data
   */
  transformReportData(
    data: PeriodReportData[],
    hasLastYear?: boolean,
    year?: number
  ) {
    year ??= new Date().getFullYear();

    const months = BusinessUtils.getMonths(
      this.app.get<string[]>("months") ?? []
    );
    const labels = months.map((m) => m.label);

    const currentYearData = this.getReportData(data, year);
    const lastYearData =
      hasLastYear == null || hasLastYear
        ? this.getReportData(data, year - 1)
        : [];

    return { labels, currentYearData, lastYearData };
  }
}
