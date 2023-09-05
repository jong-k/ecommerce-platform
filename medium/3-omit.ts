// Omit<T, K> 직접 구현
// `T`에서 `K` 프로퍼티만 제거해 새로운 객체 타입을 만듬
// Exclude 는 유니온 타입만 만들고 끝인데, Omit은 객체 형태로 만듬

interface Itodo {
  title: string;
  description: string;
  completed: boolean;
}

// 1. 기존의 Pick과 Exclude 활용
// keyof T = 유니온 타입
type MyOmitA<T, K> = Pick<T, Exclude<keyof T, K>>;

type TtodoPreviewA = MyOmitA<Itodo, "description" | "title">;
type OA = Omit<Itodo, "description" | "title">;

const todo31: TtodoPreviewA = {
  completed: false,
};

const todo32: OA = {
  completed: false,
};

// 2. Pick과 Exclude를 직접 구현해서 활용
type MyExcludeTemp<T, U> = T extends U ? never : T;
type MyOmitB<T, K extends keyof T> = { [P in MyExcludeTemp<keyof T, K>]: T[P] };

type TtodoPreviewB = MyOmitB<Itodo, "description" | "title">;
type OB = Omit<Itodo, "description" | "title">;

const todo33: TtodoPreviewB = {
  completed: false,
};

const todo34: OB = {
  completed: false,
};

// 3. 맨땅 구현
// 매핑된 타입: T의 각각의 키를 순회하며 새로운 타입 생성
// 조건부 타입: T의 key중 하나인 P가 K를 확장하면 never, 아니면(집합에 없으면) 그대로 P
type MyOmitC<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P]: T[P] };

type TtodoPreviewC = MyOmitC<Itodo, "description">;
type OC = Omit<Itodo, "description">;

const todo35: TtodoPreviewC = {
  title: "test",
  completed: false,
};

const todo36: OC = {
  title: "test",
  completed: false,
};
