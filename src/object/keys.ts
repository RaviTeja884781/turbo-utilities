'use strict';

/**
 * Object.keys() shim for ES3 environments.
 *
 * @param  {T extends object} obj The object to get keys for.
 * @return {string[]} The array of keys.
 *
 * @template T - The type of the input object.
 */
export const turboKeys =
  typeof Object.keys === 'function'
    ? Object.keys
    : /* istanbul ignore next */ function turboKeys<T extends object>(obj: T): string[] {
        const keys: string[] = [];
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            keys.push(key);
          }
        }
        return keys;
      };