import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

// Color 관련 프로퍼티를 받음 (각 값은 {...color} 형태로 받을 예정
const Color = ({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
};

export default Color;
