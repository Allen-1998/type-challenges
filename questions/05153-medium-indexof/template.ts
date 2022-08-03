import type { Equal } from "@type-challenges/utils"

export type IndexOf<T, U, L extends unknown[] = []> = T extends readonly [
  infer V,
  ...infer R
]
  ? Equal<U, V> extends true
    ? L["length"]
    : IndexOf<R, U, [...L, V]>
  : -1
