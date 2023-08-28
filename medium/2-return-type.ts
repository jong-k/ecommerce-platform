const fn = (v: boolean) => (v ? 1 : 2);

// ReturnType 유틸리티 타입 직접 구현하기
// ReturnType<T> : T 함수의 반환타입을 그대로 반환

// infer : R이라는 임시 타입 변수를 만들기 위해 사용
// T가 R(뭔가)을 반환하는 함수 시그니처이면 R을 반환하고 아니면 any를 반환
// T가 뭔가를 반환하는 함수이면, 그 반환값을 그대로 반환하고 아니면 any를 반환하는 조건부 타입
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type rta = MyReturnType<typeof fn>; // 1 | 2
type rtb = MyReturnType<() => string>; // string
type rtc = MyReturnType<() => 123>; // 123
type rtd = MyReturnType<() => () => "foo">; // () => "foo"
