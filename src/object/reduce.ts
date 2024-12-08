'use strict';

import { Bind4arguments } from '../function/Bind4arguments';

/**
 * # Reduce
 *
 * A turbo object `.reduce()` implementation.
 *
 * @param  {T} subject The object to reduce over.
 * @param  {(accumulator: any, value: any, key: string, subject: T) => any} fn The reducer function.
 * @param  {any} [initialValue] The initial value for the reducer, defaults to subject[0].
 * @param  {any} [thisContext] The context for the reducer.
 * @return {any} The final result.
 *
 * @template T - The type of the subject object.
 */
export function turboReduceObject<T extends object>(
  subject: T,
  fn: (accumulator: any, value: any, key: string, subject: T) => any,
  initialValue?: any,
  thisContext?: any
): any {
  const keys = Object.keys(subject);
  const length = keys.length;
  const iterator = thisContext !== undefined ? Bind4arguments(fn, thisContext) : fn;

  let result: any;
  let i: number;

  if (initialValue === undefined) {
    i = 1;
    result = (subject as any)[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    const key = keys[i];
    result = iterator(result, (subject as any)[key], key, subject);
  }

  return result;
}