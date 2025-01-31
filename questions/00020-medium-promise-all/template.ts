declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "foo")
})

const p = Promise.all([promise1, promise2, promise3] as const)
