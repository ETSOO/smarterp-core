import { IServiceApp, ReactAppData } from "@etsoo/materialui";
import { ICoreApp } from "./CoreApp";
import React from "react";

/**
 * Core service application context
 * 核心服务应用程序上下文
 */
export const CoreServiceAppContext =
  React.createContext<ReactAppData<ICoreServiceApp> | null>(null);

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
