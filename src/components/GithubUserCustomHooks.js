import React from "react";
import { useFetch } from "./components/useFetch";

const GithubUser = ({ login }) => {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

export default function App() {
  return <GithubUser login="jong-k" />;
}
