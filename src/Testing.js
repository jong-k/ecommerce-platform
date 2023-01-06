import { useEffect, useState } from "react";

import { addItem, readItem } from "./utils/jsonLocalStorage";

const Testing = () => {
  const [person, setPerson] = useState("");
  const [people, setPeople] = useState([]);

  const handleClick = () => {
    addItem("people", [...people, person]);
    setPeople(readItem("people"));
    setPerson("");
  };

  // 최초 렌더링 시 로컬 스토리지에 people 키가 없으면 people 키로 빈 배열 입력
  // 이미 people 키가 존재하면 state에 로컬스토리지의 데이터 저장
  useEffect(() => {
    if (!readItem("people")) addItem("people", []);
    else setPeople(readItem("people"));
  }, []);

  return (
    <>
      <h2>Hello from Testing!</h2>
      {people.map((name, idx) => (
        <p key={idx}>{name}</p>
      ))}
      <input
        type="text"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      />
      <button onClick={handleClick}>add</button>
    </>
  );
};

export default Testing;
