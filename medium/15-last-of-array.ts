type arr151 = ["a", "b", "c"];
type arr152 = [3, 2, 1];

// 배열 또는 튜플 T의 마지막 원소를 반환하는 커스텀 타입 구현
// 빈 배열이면 never 리턴

// [any, ...T] : T 배열 맨 앞에 any를 위치시켜서 맨 마지막 원소가 T["length"] 인덱스가 되게 해준다
type Last<T extends any[]> = [any, ...T][T["length"]];

type LastEl1 = Last<arr151>; // "c"
type LastEl2 = Last<arr152>; // 1
