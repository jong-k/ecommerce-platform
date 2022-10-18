// ./hooks/useInput.js
import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    // 복사, 붙여넣기 하고 싶었던 props들
    { value, onChange: (e) => setValue(e.target.value) },
    // value를 initialValue로 재설정하는 함수
    () => setValue(initialValue),
  ];
};

export default useInput;
