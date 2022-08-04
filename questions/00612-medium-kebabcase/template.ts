type KebabCase<S extends string> = KebabCaseFn<Uncapitalize<S>>

type KebabCaseFn<S> = S extends `${infer L}${infer R}`
  ? `${L}${R extends `${AlphabetUpperCase}${infer _}`
    ? `-${KebabCase<Uncapitalize<R>>}`
    : KebabCase<R>}`
  : S

{
  type a = KebabCase<"FooBarBaz">
}
