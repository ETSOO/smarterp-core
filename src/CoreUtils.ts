import Ajv, { ErrorObject } from "ajv";

/**
 * Core utilities
 */
export namespace CoreUtils {
  /**
   * Get avatar styles
   * 获取头像样式
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

  /**
   * Validate JSON input against a schema
   * 验证 JSON 输入是否符合架构
   * @param schema JSON schema to validate against
   * @param input JSON input to validate
   * @returns Result
   */
  export async function validateJson(
    schema: any,
    input: any
  ): Promise<
    [
      boolean,
      ErrorObject<string, Record<string, any>, unknown>[] | null | undefined
    ]
  > {
    const ajv = new Ajv();
    const v = await ajv.compileAsync(schema);
    return [v(input), v.errors];
  }
}
