type CamelCase<S extends string> = Uncapitalize<BigCamelCase<S>>

type UppercaseOnlyFirst<S extends string> = S extends `${infer P}${infer T}` ? `${Uppercase<P>}${Lowercase<T>}` : Uppercase<S>

type BigCamelCase<S extends string> = S extends `${infer T}_${infer P}` ? `${UppercaseOnlyFirst<T>}${BigCamelCase<UppercaseOnlyFirst<P>>}` : UppercaseOnlyFirst<S>

{
    // 更优解
    type CamelCase<S extends string> = S extends Lowercase<S>
      ? S extends `${infer F}_${infer RF}${infer R}`
        ? `${F}${Uppercase<RF>}${CamelCase<R>}`
        : S
      : CamelCase<Lowercase<S>>
}
