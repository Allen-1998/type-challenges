type AppendToObject<T, U extends string, V> = {
  [K in keyof T | U]: K extends U ? V : K extends keyof T ? T[K] : never
}

{
  type test1 = {
    key: "cat"
    value: "green"
  }
  type a = AppendToObject<test1, "home", boolean>
}
