import { IServiceApp, ReactAppContext } from "@etsoo/materialui";
import { ICoreApp } from "./CoreApp";
import { useRequiredContext } from "@etsoo/react";

/**
 * Get core service application context hook
 * @returns Application
 */
export function useRequiredAppContext(): ICoreServiceApp {
  // Get the app context
  const app = useRequiredContext(ReactAppContext);

  // Assume the app is core service app
  return app as ICoreServiceApp;
}

/**
 * Core service application interface
 * 核心服务应用程序接口
 */
export interface ICoreServiceApp extends IServiceApp {
  /**
   * Core application
   */
  readonly core: ICoreApp;
}
