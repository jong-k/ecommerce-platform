type aaa = "a" | "b" | "c";
type bbb = "a";

type ccc = "a" | "b" | "c" | "d";
type ddd = "a" | "b";

type eee = string | number | (() => void);
type fff = Function;

// Exclude 유틸리티 타입 직접 구현하기

// 조건부 타입 : 각각의 T가 U에 할당 가능한지 확인하여
// 참이면 never 타입을 설정하여 해당 타입을 제거
// 거짓이면 T를 그대로 반환
type MyExclude<T, U> = T extends U ? never : T;

type temp1 = MyExclude<aaa, bbb>; // "b" | "c"
type temp2 = Exclude<aaa, bbb>; // "b" | "c"

type temp3 = MyExclude<ccc, ddd>; // "c" | "d"
type temp4 = Exclude<ccc, ddd>; // "c" | "d"

type temp5 = MyExclude<eee, fff>; // string | number
type temp6 = Exclude<eee, fff>; // string | number
