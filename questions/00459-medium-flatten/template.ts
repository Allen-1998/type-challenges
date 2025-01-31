type Flatten<T extends unknown[]> = T extends [infer A, ...infer B]
  ? A extends unknown[]
    ? [...Flatten<A>, ...Flatten<B>]
    : [A, ...Flatten<B>]
  : []
