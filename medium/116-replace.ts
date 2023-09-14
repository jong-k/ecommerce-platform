// 문자열 S에서 From을 찾아 To로 교체하는 Replace<S, From, To> 를 구현하세요

// 구현할 내용
// 1. From이 공백 문자열이면 S를 그대로 반환
// 2. 공백 문자열이 아니면
// S에 From이 있으면 제일 앞에 나오는 From을 To로 바꾼 문자열 S' 을 반환
// S에 From이 없으면 S를 그대로 반환

type Replace<S extends string, From extends string, To extends string> = From extends ""
  ? S
  : S extends `${infer K}${From}${infer U}`
  ? `${K}${To}${U}`
  : S;

type Replaced1 = Replace<"types are fun!", "fun", "awesome">; // "types are awesome!"
type Replaced2 = Replace<"foobarbar", "", "bar">; // "foobarbar"
type Replaced3 = Replace<"foobarbar", "foo", "">; // "barbar"
type Replaced4 = Replace<"", "", "">; // ""

// 배운 내용
// 타입을 선언할 때 템플릿 리터럴을 사용할 수 있다
// infer를 활용해 조건부에서 가상의 변수를 만들고 표현부에서 변수처럼 활용할 수 있다
