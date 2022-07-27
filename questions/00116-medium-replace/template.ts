type Replace<S extends string, From extends string, To extends string> = S extends `${infer T}${From}${infer P}` ? `${T}${From extends '' ? From : To}${P}` : S

{
    type test = Replace<'foobarbar', '', 'foo'>
}
