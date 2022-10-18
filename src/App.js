import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from "./components/ColorList";

// 상태를 App 컴포넌트에만 저장
const App = () => {
  const [colors, setColors] = useState(colorData);
  // 상태를 자식 컴포넌트인 ColorList에 흘려보냄
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.map((color) => {
          return color.id === id ? { ...color, rating } : color;
        });
        setColors(newColors);
      }}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors);
      }}
    />
  );
};

export default App;
