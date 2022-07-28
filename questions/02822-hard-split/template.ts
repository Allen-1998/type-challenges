type Split<S extends string, SEP extends string> =
 S extends ""
   ? SEP extends ""
     ? []
     : [""]
   : S extends `${infer K}${SEP}${infer V}`
     ? [K, ...Split<V, SEP>]
     : S extends `${infer _}`
       ? [S]
       : string[]

{
  type a = Split<"Hi! How are you?", "">
}
