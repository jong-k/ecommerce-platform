import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
      </div>
      <div>
        <b>이름: </b> {name}
      </div>
    </div>
  );
};

export default Info;
