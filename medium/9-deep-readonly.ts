type X9 = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};
// 객체의 프로퍼티 및 모든 하위 객체까지 재귀적으로 읽기 전용으로 만드는 커스텀 유틸리티 타입 만들기

// 1. T가 never인 경우 (빈 타입 객체를 전달한 경우) 그래도 T 반환 후 종료
// 2. T의 key인 P를 만들어주고, 그 value 값들에 재귀적으로 DeepReadonly 타입 호출
type DeepReadonly<T> = T extends never
  ? T
  : {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
    };

type Result9 = DeepReadonly<X9>;
/*
{
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};
*/
