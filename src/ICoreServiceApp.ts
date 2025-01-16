import { IServiceApp, ReactAppContext } from "@etsoo/materialui";
import { ICoreApp } from "./CoreApp";
import { useRequiredContext } from "@etsoo/react";
import React, { DependencyList } from "react";
import { PageDataContext } from "@etsoo/toolpad";

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
 * Use page data
 * @param app Application
 * @param pageTitle Page title
 * @param deps Dependencies
 */
export function usePageData(
  app: ICoreServiceApp,
  pageTitle?: string,
  deps?: DependencyList
) {
  const { dispatch } = React.useContext(PageDataContext);
  React.useEffect(() => {
    // Page title
    dispatch({ page: pageTitle });

    return () => {
      app.pageExit();
    };
  }, deps);
}

/**
 * Use page data empty
 * @param app Application
 */
export function usePageDataEmpty(app: ICoreServiceApp) {
  React.useEffect(() => {
    return () => {
      app.pageExit();
    };
  }, []);
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
