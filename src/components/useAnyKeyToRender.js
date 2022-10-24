import React, { useEffect, useMemo, useState } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []); // 초기 렌더링 직후에만 호출
};

const WordCount = ({ children = "" }) => {
  useAnyKeyToRender();
  // const words = "string"; // 키 눌러도 리렌더링 X
  const words = useMemo(() => {
    return children.split(" ");
  }, [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]); // words 배열이 바뀌었다고 보고 effect 호출

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
};

export default function App() {
  return <WordCount>You are not going to believe this but...</WordCount>;
}
