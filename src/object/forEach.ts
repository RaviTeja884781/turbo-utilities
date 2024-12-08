'use strict';

import { Bind3arguments } from "../function/Bind3arguments";


/**
 * # For Each
 *
 * A turbo object `.forEach()` implementation.
 *
 * @param  {T} subject The object to iterate over.
 * @param  {(value: any, key: string, subject: T) => void} fn The visitor function.
 * @param  {any} [thisContext] The context for the visitor.
 *
 * @template T - The type of the subject object.
 */
export function turboForEachObject<T extends object>(
  subject: T,
  fn: (value: any, key: string, subject: T) => void,
  thisContext?: any
): void {
  const keys = Object.keys(subject);
  const iterator = thisContext !== undefined ? Bind3arguments(fn, thisContext) : fn;

  keys.forEach(key => {
    iterator((subject as any)[key], key, subject);
  });
}