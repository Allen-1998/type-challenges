type MyAwaited<X> = X extends Promise<infer T> ? MyAwaited<T> : X
