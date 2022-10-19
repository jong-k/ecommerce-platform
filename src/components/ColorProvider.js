// /components/ColorProvider.js
import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";
import colorData from "../data/color-data.json";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(colorData);
  // setColors를 provider에 넣는 대신 변경이 필요할 때 작동하는 세부 함수를 정의하고 넣음
  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);
  };
  const rateColor = (id, rating) => {
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );
  };
  const removeColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };
  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
