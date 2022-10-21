import React from "react";
import Star from "./Star";

// 입력받은만큼 빈 배열 만들어서 리턴하는 함수
const createArray = (length) => Array.from({ length });

// 상태가 없는 (stateless) 순수 컴포넌트 => 항상 같은 props에 대해 같은 UI를 렌더링
// color-data.json이 따로 있기 때문에 가능함
const StarRating = ({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) => {
  // useState hook이 변할 때마다 리렌더링
  return (
    <>
      {createArray(totalStars).map((_, i) => (
        // 컴포넌트와 상태를 엮음 (hook)
        <Star
          key={i}
          selected={i < selectedStars}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </>
  );
};

export default StarRating;
