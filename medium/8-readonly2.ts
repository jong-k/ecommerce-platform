interface Todo8 {
  title: string;
  description: string;
  completed: boolean;
}

// T 객체의 K 프로퍼티만 읽기 전용으로 만드는 커스텀 유틸리티 타입 구현
// K가 주어지지 않으면, Readonly<T> 처럼 모든 프로퍼티를 읽기 전용으로 만들기

// Omit<T, K> 를 통해 T에서 K를 빼낸 객체를 만든다 (T - K)
// Pick<T, K> 를 통해 T에서 K만 골라낸 객체를 만든다 (K)
// Readonly<Pick<T, K>> 를 통해 K의 모든 프로퍼티에 readonly를 적용한다

// K의 기본값에 keyof T 넣기
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

const todo81: MyReadonly2<Todo8, "title"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

// todo81.title = "heyheyhey"; // 에러
// todo81.description = "barfoo"; // 성공

const todo82: MyReadonly2<Todo8, "title" | "completed"> = {
  title: "hihi",
  description: "hoho",
  completed: true,
};

// todo82.title = "zzz"; // 에러
// todo82.description = "hahaha" // 성공
// todo82.completed = false; // 에러

const todo83: MyReadonly2<Todo8> = {
  title: "hihihi",
  description: "sayhoho",
  completed: true,
};

// todo83.title = "gogogo"; // 에러
// todo83.description = "puhaha" // 에러
// todo83.completed = false; // 에러
