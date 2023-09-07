type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

// 배열(튜플) `T`를 받아 첫 원소의 타입을 반환하는 제네릭 `First<T>`를 구현
// 빈 배열인 경우 never 를 리턴
// type head1 = First<arr1> // expected to be 'a'
// type head2 = First<arr2> // expected to be 3

// 1.
type First1<T extends any[]> = T extends [] ? never : T[0];

// 2. T의 length 프로퍼티가 0이면 빈 배열
type First2<T extends any[]> = T["length"] extends 0 ? never : T[0];

type a = First1<arr1> // a
type three = First2<arr2> // 3
