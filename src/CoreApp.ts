import { IApi } from "@etsoo/restclient";
import { MemberApi } from "./MemberApi";
import { OrgApi } from "./OrgApi";
import { AppApi } from "./AppApi";
import { PublicApi } from "./PublicApi";
import { UserApi } from "./UserApi";
import {
  AuthApi,
  IApp,
  IdentityType,
  IdentityTypeFlags,
  UserIdentifierType
} from "@etsoo/appscript";
import { AuthCodeApi } from "./AuthCodeApi";
import { DataTypes, ListType } from "@etsoo/shared";
import { CoreApiService } from "./dto/org/CoreApiService";

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
   * @param identity Identity value combined
   * @returns List
   */
  getIdentityFlags(identity?: number): ListType[];
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
  constructor(public readonly app: IApp, public readonly api: IApi) {}

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
    return identities.map((r) => r.label).join(joinChar);
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
   * @param identity Identity value combined
   * @returns List
   */
  getIdentityFlags(identity?: number) {
    if (identity == null)
      return this.app.getEnumList(IdentityTypeFlags, "id", (id) =>
        id > 0 ? id : undefined
      );

    return this.app.getEnumList(IdentityTypeFlags, "id", (id, _key) => {
      if ((id & identity) > 0) return id;
    });
  }
}
