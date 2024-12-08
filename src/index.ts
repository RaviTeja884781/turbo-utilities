import {
  turboCloneArray,
  turboConcat,
  turboEvery,
  turboFill,
  turboFilter,
  turboForEach,
  turboIndexOf,
  turboLastIndexOf,
  turboMap,
  turboPluck,
  turboReduce,
  turboReduceRight,
  turboSome,
} from './array'
import { turboApply, turboBind, turboPartial, turboTry } from './function'
import {
  turboAssign,
  turboCloneObject,
  turboFilterObject,
  turboForEachObject,
  turboKeys,
  turboMapObject,
  turboReduceObject,
  turboReduceRightObject,
  turboValues,
} from './object'

const Turbo = {
  Arrays: {
    Clone: turboCloneArray,
    Concat: turboConcat,
    Every: turboEvery,
    Fill: turboFill,
    Filter: turboFilter,
    ForEach: turboForEach,
    IndexOf: turboIndexOf,
    LastIndexOf: turboLastIndexOf,
    Map: turboMap,
    Pluck: turboPluck,
    Reduce: turboReduce,
    ReduceRight: turboReduceRight,
    Some: turboSome,
  },
  Functions: {
    Apply: turboApply,
    Bind: turboBind,
    Partial: turboPartial,
    Try: turboTry,
  },
  Objects: {
    Assign: turboAssign,
    Clone: turboCloneObject,
    Filter: turboFilterObject,
    ForEach: turboForEachObject,
    Keys: turboKeys,
    Map: turboMapObject,
    Reduce: turboReduceObject,
    ReduceRight: turboReduceRightObject,
    Values: turboValues,
  },
}

export default Turbo
