interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Pick<T, K> 유틸리티 타입을 통해 특정 객체에서 프로퍼티를 뽑아 새로운 타입을 만들 수 있다
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// Pick 직접 구현하기
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
/* 
P : T 객체의 key (1개 이상 가능)
K : T 객체의 key (집합)
*/

type TodoPreview2 = MyPick<Todo, "title" | "completed">;

const todo2: TodoPreview2 = {
  title: "Clean room",
  completed: false,
};
