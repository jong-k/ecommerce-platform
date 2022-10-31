import React, { useState, useEffect } from "react";

const GithubUser = ({ login }) => {
  const [data, setData] = useState(); // 초기 data = null

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [login]);
  // JSON.stringify(1.JSON데이터, 2.replacer 함수(프로퍼티 변경), 3. JSON을 문자열로 바꿀 때 쓸 공백 갯수)
  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>; // pre element는 서식 그대로 표현 (공백, 줄바꿈 등을 그대로)
  return null; // 리액트에서 컴포넌트가 null을 반환하면 아무것도 렌더링하지 않는다는 뜻 (빈 화면)
  // 이후 useEffect 훅 호출됨
};

export default function App() {
  return <GithubUser login="jong-k" />;
}
