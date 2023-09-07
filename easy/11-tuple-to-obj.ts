const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, "2", 3, "4"] as const;

// 배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현
// T : readonly any[]
// T[number] : T의 원소
type TupleToObject<T extends readonly any[]> = { [P in T[number]]: P };

type tuple1 = TupleToObject<typeof tuple>;
type tupleNumber1 = TupleToObject<typeof tupleNumber>;
type tupleMix1 = TupleToObject<typeof tupleMix>;
