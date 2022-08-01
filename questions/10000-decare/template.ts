{
  type Decare<A extends any[], B extends any[]> = UnionToTuple<
    ObjectValues<{
      [K in A[number]]: ObjectValues<{
        [P in B[number]]: `${K}${P}`
      }>
    }>
  >

  type ObjectValues<T> = T[keyof T]

  type UnionToIntersection<T> = (T extends T ? (k: T) => void : never) extends (
    k: infer P
  ) => void
    ? P
    : never
  type IntersectionToIntersectionFn<T> = UnionToIntersection<
    T extends unknown ? () => T : never
  >
  type UnionToTuple<
    Union,
    T extends any[] = []
  > = IntersectionToIntersectionFn<Union> extends () => infer I
    ? UnionToTuple<Exclude<Union, I>, [I, ...T]>
    : T

  type a = ["a", "b", "c"]
  type b = [1, 2, 3]
  type c = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
  type d = Decare<a, b>

  type e = c[number] extends d[number] ? true : false
}
