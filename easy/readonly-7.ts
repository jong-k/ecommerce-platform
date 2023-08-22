interface Todo1 {
  title: string;
  description: string;
}
// Readonly<T> 유틸리티 타입으로 객체의 모든 프로퍼티를 읽기 전용으로 만들 수 있다
const todo1: Readonly<Todo1> = {
  title: "Hey",
  description: "foobar",
};

// Readonly 이므로 재할당 불가
// todo1.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property

// Readonly<T> 직접 구현하기
type MyReadonly<T> = { readonly [P in keyof T]: T[P] };
/*
P : 객체 T의 key (1개 이상)
readonly를 통해 각 필드를 읽기 전용으로 바꿈
*/

const todo3: MyReadonly<Todo1> = {
  title: "haha",
  description: "hoho",
};

// Readonly 이므로 재할당 불가
// todo3.title = "change!!";
// todo3.description = "nono";
