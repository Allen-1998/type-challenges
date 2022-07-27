type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer T}${From}${infer P}` ? `${T}${From extends '' ? From : To}${ReplaceAll<P, From, To>}` : S

