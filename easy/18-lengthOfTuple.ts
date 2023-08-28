const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

// 배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현
type Length<T extends readonly any[]> = T["length"];

type L1 = Length<typeof tesla>; // 4
type L2 = Length<typeof spaceX>; // 5
