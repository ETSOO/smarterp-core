import type { CommonPageProps, ResponsePageProps } from "@etsoo/materialui";

/**
 * Default UI namespace
 */
export namespace DefaultUI {
  /**
   * Create response page props
   * @param page Page props
   * @returns Response page props
   */
  export function createProps(
    page: CommonPageProps
  ): Pick<
    ResponsePageProps<any, any>,
    "adjustHeight" | "searchBarTop" | "pageProps"
  > {
    return {
      adjustHeight: 24,
      searchBarTop: true,
      pageProps: {
        ...page
      }
    };
  }

  /**
   * Widths of icon columns
   */
  export const Widths = {
    icon1: 88,
    icon2: 120,
    icon3: 152,
    icon4: 184
  };
}
