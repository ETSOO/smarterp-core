import { Culture, IApp } from "@etsoo/appscript";

/**
 * Core culture
 */
export namespace CoreCulture {
  /**
   * Get en neutral culture
   * @param localResources Local resources
   * @returns Full culture
   */
  export const en = (...resources: (object | (() => Promise<object>))[]) =>
    Culture.en(import("./en.json"), ...resources);

  /**
   * Get zh-Hans neutral cultrue
   * @param localResources Local resources
   * @returns Full culture
   */
  export const zhHans = (...resources: (object | (() => Promise<object>))[]) =>
    Culture.zhHans(import("./zh-Hans.json"), ...resources);

  /**
   * Get zh-Hant neutral cultrue
   * @param localResources Local resources
   * @returns Full culture
   */
  export const zhHant = (...resources: (object | (() => Promise<object>))[]) =>
    Culture.zhHant(import("./zh-Hant.json"), ...resources);

  /**
   * Get the toolpad locale
   * @param app Current app
   * @returns Result
   */
  export const getToolpadLocale = (app: IApp) => {
    // Labels
    const {
      accountIconButtonAriaLabel,
      collapseMenu: collapseMenuTitle,
      collapseNavMenuAriaLabel,
      darkMode: darkModeTitle,
      expandMenu: expandMenuTitle,
      expandNavMenuAriaLabel,
      lightMode: lightModeTitle,
      signin: signInLabel,
      signout: signOutLabel,
      switchMode: switchModeTitle,
      switchThemeModeAriaLabel,
      switchToDarkModeAriaLabel,
      switchToLightModeAriaLabel
    } = app.getLabels(
      "accountIconButtonAriaLabel",
      "collapseMenu",
      "collapseNavMenuAriaLabel",
      "darkMode",
      "expandMenu",
      "expandNavMenuAriaLabel",
      "lightMode",
      "signin",
      "signout",
      "switchMode",
      "switchThemeModeAriaLabel",
      "switchToDarkModeAriaLabel",
      "switchToLightModeAriaLabel"
    );

    return {
      accountIconButtonAriaLabel,
      collapseMenuTitle,
      collapseNavMenuAriaLabel,
      darkModeTitle,
      expandMenuTitle,
      expandNavMenuAriaLabel,
      lightModeTitle,
      signInLabel,
      signOutLabel,
      switchModeTitle,
      switchThemeModeAriaLabel,
      switchToDarkModeAriaLabel,
      switchToLightModeAriaLabel
    };
  };
}
