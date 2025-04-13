import type {
  CommonPageProps,
  ResponsePageProps,
  TabBoxProps
} from "@etsoo/materialui";

/**
 * Default UI namespace
 */
export namespace DefaultUI {
  /**
   * Default response page props
   * @param page Page props
   * @returns Response page props
   */
  export function pageProps(
    page: CommonPageProps
  ): Pick<
    ResponsePageProps<any, any>,
    "adjustHeight" | "searchBarTop" | "pageProps"
  > {
    return {
      adjustHeight: 24,
      searchBarTop: true,
      pageProps: {
        paddings: 0,
        ...page
      }
    };
  }

  /**
   * Default TabBox props
   * @param isMobile Whether is mobile
   * @returns Result
   */
  export function tabsProps(isMobile: boolean) {
    const props: Partial<TabBoxProps> = isMobile
      ? {
          sx: { maxWidth: { xs: 320, sm: 480 } },
          variant: "scrollable",
          scrollButtons: "auto",
          allowScrollButtonsMobile: true,
          centered: true
        }
      : {};

    return props;
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
