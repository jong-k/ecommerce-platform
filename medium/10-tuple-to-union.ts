// 튜플을 받아 유니온 타입으로 변환하는 커스텀 타입 구현
type Arr = ["1", "2", "3"];

// 1. 조건부 타입을 활용하는 방법

// 튜플 : ReadonlyArray<K>
// T가 튜플일 경우의 조건부 타입을 만들고, 그 원소 K를 타입 추론하여
// T가 튜플이면 그 원소 K를 반환하고
// 아니면 never(절대 발생하지 않는 타입) 반환
type TupleToUnion1<T> = T extends ReadonlyArray<infer K> ? K : never;
type union101 = TupleToUnion1<Arr>; // "1" | "2" | "3"

// 2.

// 튜플 : readonly any[]
type TupleToUnion2<T extends readonly any[]> = T[number];
type union102 = TupleToUnion1<Arr>; // "1" | "2" | "3"
