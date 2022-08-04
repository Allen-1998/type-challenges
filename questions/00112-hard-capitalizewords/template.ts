type AlphabetLowerCase =
'a' | 'b' | 'c' | 'd' | 'e' |
'f' | 'g' | 'h' | 'i' | 'j' |
'k' | 'l' | 'm' | 'n' | 'o' |
'p' | 'q' | 'r' | 's' | 't' |
'u' | 'v' | 'w' | 'x' | 'y' |
'z'

type AlphabetUpperCase = Uppercase<AlphabetLowerCase>

type Alphabet = AlphabetLowerCase | AlphabetUpperCase

type CapitalizeWords<S extends string, Prev extends string=' '> =
  S extends `${infer L}${infer Rest}`
    ? `${Prev extends Alphabet ? L : Capitalize<L>}${CapitalizeWords<Rest, L>}`
    : S
// TODO 待二刷，这里是一个黑魔法，注释掉下面这一行会导致倒数第二个case不通过,提示类型实例化过深，且可能无限
type test = CapitalizeWords<'🤣qq'>
