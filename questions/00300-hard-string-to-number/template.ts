type ToNumber<S extends string, R extends unknown[] = []> = S extends `${number}`
  ? S extends `${R["length"]}` ? R["length"] : ToNumber<S, [...R, unknown]>
  : never
