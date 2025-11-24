export {}

// 1) 기본 매개변수 타입 지정 
function getUserInfo(name: string, age: number): string {
  return `${name}은(는) ${age}살입니다.`
}

console.log(getUserInfo('홍길동', 20));
// console.log(getUserInfo(20, '홍길동')); // 순서 일치해야됨
// console.log(getUserInfo('홍길동'));     // 개수 일치해야됨 


// 2) 옵셔널 매개변수 
//  매개변수명 뒤에 ?를 붙여 인자를 생략할 수 있도록 지정 
//  유의사항 : 반드시 필수 매개변수 뒤에 위치해야됨 
function getMessage(name: string, msg?: string): string {
  return `${msg || 'Hello'}, ${name}`;
}

console.log(getMessage('Hong', 'GoodBye'));
console.log(getMessage('Kim'));

// 3) 기본값 매개변수 
//  유의사항: 옵셔널? 키워드 작성하면 안됨 
function printMessage(msg: string = 'Hi'): void {
  console.log(msg);
}
printMessage('Hello Everyone!');
printMessage();

// 4) 유니언, 리터럴 적용 가능
function setStatus(status: "success" | "error" | "pending"): void {
  console.log(status);
}
setStatus("pending");
// setStatus("loading");

// 5) 나머지 매개변수 (Rest Parameter)
//  매개변수명 앞에 ...를 붙여 인자를 배열로 받음 
//  유의사항: 필수 매개변수 뒤에 위치해야됨

function joinString(separator:string, ...strings: string[]): string {
  console.log(strings.length);
  return strings.join(separator);
}

console.log(joinString("-", "Hello", "World")) // strings === ["Hello", "World"]
console.log(joinString(" ", "Hello", "World", "!")); // strings === ["Hello", "World", "!"]


// 리액트에서의 실전 예시 

interface User {
  name: string;
  age: number;
}

interface UserDetailProps {
  user: User;
  color: string
}

// 사용자 정보를 전달받아서 ui 구성하는 함수형 컴포넌트라고 생각 
// props === { user: User타입객체, color: string }
/*
function UserDetailComponent(props: UserDetailProps) { 
  console.log(`${props.user.name}은(는) ${props.user.age}살 입니다.`)
}
*/
// <UserDetailComponent user={User객체} color={'red'} />


// 객체 구조 분해 사용
function UserDetailComponent({user, color}: UserDetailProps) { 
  console.log(`${user.name}은(는) ${user.age}살 입니다.`)
}

UserDetailComponent({
  user: {name: '홍길동', age: 20},
  color: 'red'
});