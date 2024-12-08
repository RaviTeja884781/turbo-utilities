'use strict';

/**
 * Analogue of Object.assign().
 * Copies properties from one or more source objects to
 * a target object. Existing keys on the target object will be overwritten.
 *
 * @param  {T} target The target object to copy properties to.
 * @param  {U[]} sources The source(s) to copy properties from.
 * @return {T & U} The updated target object.
 *
 * @template T - The type of the target object.
 * @template U - The type of the source objects.
 */

export function turboAssign<T extends object, U extends object>(target: T, ...sources: U[]): T & U {
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      (target as any)[key] = (source as any)[key];
    });
  });
  return target as T & U;
}
