import React, { useState, useEffect } from "react";

const App = () => {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val); // 2
    set(""); // 3
  };

  useEffect(() => {
    console.log(`typing ${val}`);
  }, [val]); // val이 바뀔 때만 호출

  useEffect(() => {
    console.log(`saved phrase: ${phrase}`);
  }, [phrase]); // pharse가 바뀔때만 호출

  useEffect(() => {
    console.log("either val or phrase has changed");
  }, [val, phrase]); // val or phrase 어느 값이라도 바뀌면 호출

  return (
    <>
      <label htmlFor="">Favorite phrase</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => set(e.target.value)} // 1. 입력할때마다 val이 바뀜 (리렌더링)
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
};

export default App;
