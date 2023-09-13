// 프로미스로 래핑된 타입의 내용물을 추출하는 Awaited 유틸리티 타입 직접 구현하기
// A = string
// type A = Awaited<Promise<string>>;
// B = number
// type B = Awaited<Promise<Promise<number>>>;
// C = boolean | number
// type C = Awaited<boolean | Promise<number>>;

// 내장 PromiseLike 타입 활용
// T는 Promise<> 또는 Promise<Promise<>> 만 가능
type MyAwaited<T extends PromiseLike<any | PromiseLike<any>>> = T extends PromiseLike<
  infer V
>
  ? V extends PromiseLike<any>
    ? MyAwaited<V>
    : V
  : never;

type X1890 = Awaited<Promise<string>>; // string
type X1891 = MyAwaited<Promise<string>>; // string
type X1892 = MyAwaited<Promise<Promise<string>>>; // string
type X1893 = MyAwaited<Promise<Promise<Promise<string | boolean>>>>; // string | boolean

// 참고로 PromiseLike<>에는 then 프로퍼티만 존재
// Promise<>에는 finally 만 존재
