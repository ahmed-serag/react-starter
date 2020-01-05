/**
 * @author Ahmed Serag
 * @Date: 2019-6-13
 * @description Implementation of Common utilities.
 * @filename common.ts
 */

/**
 * contain Common utilities used across the app.
 *
 * @export
 * @class Common
 */
export class Common {
  /**
   * check if this value not null and not undefined.
   *
   * @static
   * @param {*} value any kind of objects.
   * @returns {boolean} true if values exists.
   * @memberof Common
   */
  public static exist(value: any, keys: string[] = undefined): boolean {
    // first missing key if found
    let missingKey: string;
    let exist: boolean = true;

    if (value === undefined || value === null) {
      exist = false;
    }

    if (exist && keys !== undefined && keys !== null) {
      missingKey = keys.find((key: string) => {
        return value[key] === null || value[key] === undefined;
      });
    }

    return exist && !missingKey;
  }
}
