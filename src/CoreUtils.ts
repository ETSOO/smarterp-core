/**
 * Core utilities
 */
export namespace CoreUtils {
  /**
   * Get avatar styles
   * @param isOrg Is this an organization avatar?
   * @returns Styles
   */
  export function avatarStyles(isOrg: boolean = false): React.CSSProperties {
    return {
      width: "160px",
      height: isOrg ? "80px" : "160px",
      border: "1px solid #666"
    };
  }
}
