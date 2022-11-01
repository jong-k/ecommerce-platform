import React, { useState, useEffect } from "react";

function GitHubUser({ login }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 2. effect 실행
    if (!login) return;
    setLoading(true); // 3. loading true로 변경 -> promise는 비동기 작업이기 때문에 리렌더링 발생하여 loading... 렌더링
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false)) // 5. promise resolve되고 data 상태 변경되면 다시 loading이 false로 바뀜
      .catch(setError);
  }, [login]);

  if (loading) return <h1>loading...</h1>; // 3. 같은 맥락
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null; // 1. 초기 빈화면 렌더링

  return (
    // 6. 렌더링 발생
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

export default function App() {
  return <GitHubUser login="MoonHighway" />;
}
