type CurriedFn<Fn> = Fn extends (...args: infer Args) => infer R
  ? Args extends [infer F, ...infer Rest]
    ? (arg: F) => CurriedFn<(...rest: Rest) => R>
    : R
  : never

declare function Currying<Fn>(fn: Fn): CurriedFn<Fn>

const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)
