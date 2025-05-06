import { IServiceApp, ReactAppContext } from "@etsoo/materialui";
import { ICoreApp } from "./CoreApp";
import { useRequiredContext } from "@etsoo/react";
import React, { DependencyList } from "react";
import { PageData, PageDataContext } from "@etsoo/toolpad";

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
 * @param pageTitle Page title or true for reset
 * @param deps Dependencies
 */
export function usePageData(
  app: ICoreServiceApp,
  pageTitle?: string,
  deps?: DependencyList
): void;

/**
 * Use page data
 * @param app Application
 * @param pageData Page data
 * @param deps Dependencies
 */
export function usePageData(
  app: ICoreServiceApp,
  pageData?: PageData,
  deps?: DependencyList
): void;

export function usePageData(
  app: ICoreServiceApp,
  pageDataOrTitle?: string | PageData,
  deps?: DependencyList
) {
  const { dispatch } = React.useContext(PageDataContext);
  React.useEffect(() => {
    // Page title
    dispatch(
      typeof pageDataOrTitle === "object"
        ? pageDataOrTitle
        : { page: pageDataOrTitle }
    );

    return () => {
      // Reset page data
      dispatch(true);

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
