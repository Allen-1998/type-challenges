type Reverse<T extends unknown[]> = T extends [infer P, ...infer V] ? [...Reverse<V>, P] : T
