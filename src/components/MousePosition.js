import React, { useLayoutEffect, useState } from "react";

const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({ x, y }) => {
    setX(x);
    setY(y);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => window.removeEventListener("mousemove", setPosition);
  }, []);

  return [x, y];
};

const App = () => {
  const [left, top] = useMousePosition();
  return (
    <div style={{ position: "absolute", top, left, cursor: "none" }}>
      {top}x{left}
    </div>
  );
};

export default App;
