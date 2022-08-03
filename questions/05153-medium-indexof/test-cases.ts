import type { Equal, Expect } from "@type-challenges/utils"
import type { IndexOf } from "./template"

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, "a"], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, "a", any], any>, 4>>
]

{
  type x = readonly ["macOS", "Windows", "Linux"]

  type a = IndexOf<[1, 2, 3], 2>
  type b = IndexOf<x, "macOS">
  type c = x[0]
}
