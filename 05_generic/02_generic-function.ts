export {}

// 두 객체 타입의 데이터를 전달받아 병합해서 반환하는 함수 
function merge<T, U>(a: T, b: U): T & U {
  return {...a, ...b}
}

const mergedObj = merge({name: '홍길동'}, {age: 30});
console.log(mergedObj);


// 전달되는 데이터의 길이를 출력하는 함수 
/*
function printLength(data: any): void {
  console.log(data.length);
}
*/

// 제네릭 제약 : length property가 포함되어있는 타입으로 제한 
//               즉, {length: number} 타입을 만족하는 타입으로 제한 
function printLength<T extends {length: number}>(data: T): void {
  console.log(data.length);
}

printLength("hello");
printLength([1, 2, 3]);
// printLength(100);
// printLength(mergedObj);