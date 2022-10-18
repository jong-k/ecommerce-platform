import React from "react";
import Color from "./Color";

// props로 App 컴포넌트에서 colors를 전달받음
const ColorList = ({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) => {
  if (!colors.length) return <div>표시할 색이 없습니다.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
};

export default ColorList;
