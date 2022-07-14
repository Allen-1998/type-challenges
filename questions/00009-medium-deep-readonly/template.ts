type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends string | Function
    ? T[P]
    : DeepReadonly<T[P]>
}
