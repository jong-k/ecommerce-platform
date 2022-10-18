// AddColorForm.js
import React from "react";
import useInput from "../hooks/useInput";

const AddColorForm = ({ onNewColor = (f) => f }) => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  // submit event가 발생하면 작동하는 함수
  const submit = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle(); // submit 후 값을 빈 문자열로 초기화
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
