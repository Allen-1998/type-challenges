import type { IndexOf } from "../05153-medium-indexof/template"

export type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in T[number] as Capitalize<K>]: N extends true ? IndexOf<T, K> : K
}
