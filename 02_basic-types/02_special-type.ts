// 특수 타입 : any, unknown, 함수관련(void, never)

export {}

/*
  📌 any 타입
  1. 모든 타입을 허용할 때 사용
  2. 컴파일러의 타입 검사를 하지 않음 *****
  3. 타입스크립트의 안정성을 포기하는 개념이므로 특별한 경우 외에 권장하지 않음
*/
let anything: any;
anything = 10;
/*
console.log(typeof anything);
anything = "hello";
console.log(typeof anything);
anything = [1, 2, 3];
console.log(typeof anything);
*/
console.log(anything.length);
// anything.do(); // 컴파일 에러는 없지만 런타임시 에러가 발생 됨 (컴파일시 오류를 알지 못하니 코드의 안전성 떨어짐)

// any = 타입 검사가 엄격하지 않음 (타입 체크 없이 무분별하게 프로퍼티 접근 또는 연산 가능)


/*
  📌 unknown 타입
  1. any 타입과 유사하게 모든 타입을 허용하지만 더 안전한 타입
  2. 타입 검사가 엄격함
     → typeof 연산자 또는 타입 검사를 위한 함수를 사용하여  
       타입을 체크한 후 프로퍼티 접근 또는 연산을 수행할 수 있음 
  3. 주로 API 데이터같이 타입을 모를 때 임시 타입으로 사용 
*/

let what: unknown;
what = 10;
what = "hello";

// console.log(what.length); // unknown 타입이므로 타입 검사 후에 프로퍼티에 접근하도록 유도 (컴파일 에러)
if(typeof what === "string"){ // 타입 체크
  console.log(what.length);
}

what = [1, 2, 3];

if(Array.isArray(what)){ // array 타입 검사
  console.log(what.length);
}
