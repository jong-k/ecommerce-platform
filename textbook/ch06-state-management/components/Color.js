import React from "react";
import StarRating from "./StarRating";
import { useColors } from "./ColorProvider";

// Color 관련 프로퍼티를 받음 (각 값은 {...color} 형태로 받을 예정
const Color = ({ id, title, color, rating }) => {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>X</button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
};

export default Color;
