export {}

/*
  📌 유니온 타입
  1. 여러 타입 중 하나를 허용하는 타입 
  2. 주로 여러 타입을 "합집합"으로 표현할 때 사용
  3. 작성법
     타입1 | 타입2 | 타입3
*/

let union1: number | string;
union1 = 10;
union1 = 'hello';
// union1 = true;

let union2: (number | string)[];
union2 = [1, 2, 'hello'];
union2 = ['hello', 'world'];
// union2 = [1, 'hello', true];

// 방향에 대한 값(up, down, left, right)
let direction: "up" | "down" | "left" | "right";
direction = "right";
// direction = "north";

let user: {
  name: string,
  age: number,
  role: "ADMIN" | "USER" | "GUEST"
};


let product: {} | null;