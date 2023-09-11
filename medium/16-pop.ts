// 배열 T를 받아 마지막 요소를 제외한 배열을 반환하는 커스텀 타입
type arr161 = ["a", "b", "c", "d"];
type arr162 = [3, 2, 1];

/*풀이
1. rest parameter와 타입 추론 infer 를 활용해 배열 T를 [...infer K, unknown] 일 때 K 를 반환하는 조건부타입으로 만듬
2. K만 반환되기 때문에 맨 마지막 원소 unknown이 빠져나감
*/
type Pop<T extends any[]> = T extends [...infer K, unknown] ? K : never;
type Popped1 = Pop<arr161>; // ["a", "b", "c"]

type Push<T extends any[], K> = [...T, K];
type Pushed1 = Push<arr161, "e">; // ["a", "b", "c", "d", "e"]

type Shift<T extends any[]> = T extends [unknown, ...infer K] ? K : never;
type Shifted1 = Shift<arr162>; // [2, 1]

type Unshift<T extends any[], K> = [K, ...T];
type Unshifted1 = Unshift<arr162, 4>; // [4, 3, 2, 1]
