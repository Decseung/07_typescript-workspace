export {} 

/*
  📌 변수 선언 및 초기화 
  1. 타입스크립트에서는 변수 선언 시 타입을 명시적으로 지정해야 함 (타입 주석)
  2. 작성법
    let|const 변수명: 타입 = 값;
  3. 타입을 명시하지 않을 경우 유의사항 
    1) 변수 선언 시    : any 타입으로 추론됨
    2) 특정 값 할당 시 : 해당 값의 타입으로 추론됨
*/

let noType1;
let noType2 = 10;



/*
  📌 기본 타입 (Primitive Types)
  1. 원시 값을 표현하는 타입
  2. 종류
    1) number
    2) string
    3) boolean
    4) null
    5) undefined
    6) symbol
    7) bigint
*/
let num: number;
num = 10;
// num = '123';

let str: string;
str = `hello ${num}`
str = 'hello' + 'world';
// str = 10;
// str = undefined;
// str = null;

let bool: boolean;
bool = false;
// bool = 1;

let nul: null;
nul = null;
// nul = undefined;

let unde: undefined;
unde = undefined;
// unde = null;

let big: bigint;
big = 123456789123456789123446675687556n;
// let small: number = 123456789123456789123446675687556n;

let sym: symbol;
sym = Symbol('sym');

