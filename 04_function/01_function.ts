export {};

/*
  📌 타입스크립트에서의 함수 
  1. 자바스크립트 함수와 구조가 동일하지만 매개변수와 반환값에 대한 타입을 명확히 지정
     → 타입 안정성과 코드 가독성 크게 향상 
  2. 작성법
    1) 함수 선언식
       function 함수명(매개변수: 타입): 반환값 타입 {
         return 반환값;
       }
    2) 함수 표현식
       const 함수명 = function(매개변수: 타입): 반환값 타입 {
         return 반환값;
       }
    3) 화살표 함수
       const 함수명 = (매개변수: 타입): 반환값 타입 => {
         return 반환값;
       }
*/

function sum(a: number, b: number): number {
  return a + b;
}
let result1: number = sum(1, 2);
console.log(result1);


const substract = function(a: number, b: number): number {
  return a - b;
}
console.log(substract(10, 5));

const divide = (a: number, b: number): number => a/b;
console.log(divide(1, 2));