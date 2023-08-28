type a = "a" | "b" | "c";
type b = "a";

type c = "a" | "b" | "c" | "d";
type d = "a" | "b";

type e = string | number | (() => void);
type f = Function;

// Exclude 유틸리티 타입 직접 구현하기

// 조건부 타입 : 각각의 T가 U에 할당 가능한지 확인하여
// 참이면 never 타입을 설정하여 해당 타입을 제거
// 거짓이면 T를 그대로 반환
type MyExclude<T, U> = T extends U ? never : T;

type temp1 = MyExclude<a, b>; // "b" | "c"
type temp2 = Exclude<a, b>; // "b" | "c"

type temp3 = MyExclude<c, d>; // "c" | "d"
type temp4 = Exclude<c, d>; // "c" | "d"

type temp5 = MyExclude<e, f>; // string | number
type temp6 = Exclude<e, f>; // string | number
