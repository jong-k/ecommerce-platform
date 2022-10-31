import React, { useState, useEffect } from "react";

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({ login }) {
  const [data, setData] = useState(loadJSON(`user:${login}`)); // 1. 최초 null // 8. data에 load된 데이터 할당됨

  // data 값이 바뀔 때마다 호출되는 훅
  useEffect(() => {
    if (!data) return; // 3. data 없어서 리턴되고 끝 // 6. data 있으므로 실행 가능
    if (data.login === login) return; // 9. data 와 login 같으면 effect 종료
    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      // 7. 해당 key에 아래 value 저장 -> 다시 리렌더링
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);

  useEffect(() => {
    // 4. 이 effect 실행됨
    if (!login) return;
    if (data && data.login === login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData) // 5. 드디어 data 저장됨 -> 리렌더링 발생
      .catch(console.error);
  }, [login]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>; // 10. data로 컴포넌트 렌더링
  return null; // 2. 최초 렌더링
}

export default function App() {
  return <GitHubUser login="jong-k" />;
}
