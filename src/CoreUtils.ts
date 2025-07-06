import type Ajv from "ajv";
import type { ErrorObject } from "ajv";
import addFormats from "ajv-formats";

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

  let ajv: Ajv | null = null;

  /**
   * Validate JSON input against a schema
   * 验证 JSON 输入是否符合架构
   * @param schema JSON schema to validate against
   * @param input JSON input to validate
   * @returns Result
   */
  export async function validateJson(
    schema: string | object,
    input: string | object | null | undefined
  ): Promise<
    [
      boolean,
      ErrorObject<string, Record<string, any>, unknown>[] | null | undefined
    ]
  > {
    if (ajv == null) {
      const AjvImport = await import("ajv");
      const AjvClass = AjvImport.Ajv ?? AjvImport.default;

      ajv = new AjvClass({
        allErrors: true,
        strictTypes: false
      });

      addFormats(ajv);
    }

    return [
      ajv!.validate(
        typeof schema === "string" ? JSON.parse(schema) : schema,
        typeof input === "string" ? JSON.parse(input) : input
      ),
      ajv!.errors
    ];
  }
}
