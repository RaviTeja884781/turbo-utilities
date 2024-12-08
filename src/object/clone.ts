'use strict';

/**
 * # Clone Object
 *
 * Shallow clone a simple object.
 *
 * > Note: Prototypes and non-enumerable properties will not be copied!
 *
 * @param  {T} input The object to clone.
 * @return {T} The cloned object.
 *
 * @template T - The type of the input object.
 */

export function turboCloneObject<T extends object>(input: T): T {
  const keys = Object.keys(input);
  const cloned: T = {} as T;

  keys.forEach((key) => {
    (cloned as any)[key] = (input as any)[key];
  });

  return cloned;
}

