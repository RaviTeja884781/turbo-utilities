'use strict';

import { Bind3arguments } from '../function/Bind3arguments';

/**
 * # Map
 *
 * A turbo object `.map()` implementation.
 *
 * @param  {T} subject The object to map over.
 * @param  {(value: any, key: string, subject: T) => any} fn The mapper function.
 * @param  {any} [thisContext] The context for the mapper.
 * @return {Partial<T>} The new object containing the results.
 *
 * @template T - The type of the subject object.
 */

export  function turboMapObject<T extends object>(
  subject: T,
  fn: (value: any, key: string, subject: T) => any,
  thisContext?: any
): Partial<T> {
  const keys = Object.keys(subject);
  const result: Partial<T> = {};
  const iterator = thisContext !== undefined ? Bind3arguments(fn, thisContext) : fn;

  keys.forEach((key) => {
    (result as any)[key] = iterator((subject as any)[key], key, subject);
  });

  return result;
}