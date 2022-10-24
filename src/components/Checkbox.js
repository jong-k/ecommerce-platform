import React, { useState, useEffect } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
    // localStorage.setItem("checkbox-value", checked);
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
};

export default Checkbox;
