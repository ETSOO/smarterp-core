import { IApi } from "@etsoo/restclient";
import { MemberApi } from "./MemberApi";
import { OrgApi } from "./OrgApi";
import { AppApi } from "./AppApi";
import { PublicApi } from "./PublicApi";
import { UserApi } from "./UserApi";
import { AuthApi, IApp } from "@etsoo/appscript";
import { IdentityType } from "./dto/IdentityType";

/**
 * Core application
 * 核心应用程序
 */
export class CoreApp {
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
  constructor(public app: IApp, protected api: IApi) {}

  /**
   * Get identities
   * @returns List
   */
  getIdentities() {
    return this.app.getEnumList(IdentityType, "id");
  }
}
