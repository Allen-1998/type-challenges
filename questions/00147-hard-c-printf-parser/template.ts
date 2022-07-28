type ControlsMap = {
  c: "char"
  s: "string"
  d: "dec"
  o: "oct"
  h: "hex"
  f: "float"
  p: "pointer"
}

type ParsePrintFormat<S extends string> =
  S extends `${infer _}%${infer K}${infer P}`
    ? K extends keyof ControlsMap
      ? [ControlsMap[K], ...ParsePrintFormat<P>]
      : ParsePrintFormat<P>
    : []
