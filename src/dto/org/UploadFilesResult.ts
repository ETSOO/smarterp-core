import { IActionResult } from "@etsoo/shared";

/**
 * Upload files result
 */
export type UploadFilesResult = IActionResult<{
  /**
   * Relative paths
   */
  paths: string[];

  /**
   * URLs
   */
  urls: string[];
}>;
