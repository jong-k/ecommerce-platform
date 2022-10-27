import React, { useState, memo, useCallback } from "react";

const Cat = ({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};

const PureCat = memo(Cat);

const App = () => {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  const meow = useCallback((name) => console.log(`${name} has meowed`), []); // 리렌더링 X -> 쭉 같은 함수이므로 memo에서 걸러지지 않음
  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} meow={meow} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
    </>
  );
};

export default App;
