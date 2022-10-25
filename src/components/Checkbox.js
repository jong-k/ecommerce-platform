import React, { useState, useEffect } from "react";

const App = () => {
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    setChecked((checked) => !checked);
  };
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
};

export default App;
