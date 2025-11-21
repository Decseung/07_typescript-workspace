export {}

/*
  📌 타입 별칭 (Type Alias)
  1. 복잡하거나 반복되는 타입에 이름을 부여하고자 할 때 사용 (커스텀 타입)
  2. 다양한 타입 조합에 사용
  3. 장점
    1) 타입 중복 정의를 피할 수 있음 (코드 중복 제거)
    2) 타입 변경 시 일괄 수정 가능 (유지보수 용이)
    3) 타입 구조를 명확하게 표현 가능 (가독성 향상)
  4. 작성법
     type 타입별칭 = 타입정의;
  5. 타입별칭은 변수명과의 구분을 위해 대문자로 시작하는걸 권장
*/

// 1) 기본 타입 별칭
type Age = number;
let userAge: Age = 30;
userAge = 40;
// userAge = '50';

// 2) 리터럴 타입 별칭
type Name = 'Kim' | 'Lee' | 'Park';
let userName: Name = 'Kim';
userName = 'Lee';
// userName = 'Kang';


type Greeting = `Hello ${Name}`; // TypeScript 4.1 이상부터
let message: Greeting = 'Hello Kim';
message = 'Hello Lee';
// message = 'Hello Kang';


type StatusCode = 200 | 400 | 404 | 500;
let status: StatusCode = 200;


// 3) 객체 타입 별칭 
type User = {
  id: number | string,
  name: Name, 
  email: string,
  isAdmin: boolean
}

let user1: User = {
  id: 1,
  name: "Kim",
  email: "kim@example.com",
  isAdmin: false
};
console.log(user1);

let user2: User = {
  id: "2",
  name: "Park",
  email: "park@example.com",
  isAdmin: true
}

let users: User[] = [
  {id: 3, name: "Lee", email: "lee@example.com", isAdmin: false},
]


type Person = {
  name: string,
  age: number,
  job?: string // ? : optional, 선택적 속성 
}

let person1: Person = {
  name: '김말똥',
  age: 30, 
  job: '개발자'
};

let person2: Person = {
  name: '강개순',
  age: 20
  // 백수라 직업 없음
}

type ApiKey = {
  readonly apiName: string, // readonly 속성: 속성 수정 불가(읽기 전용)
  readonly apiKey: string
}

let kakaoApi: ApiKey = {
  apiName: 'kakao',
  apiKey: '123091239873a123'
}
// kakaoApi.apiKey = 'sdfsdf123123'; // 값 초기화 이후 속성 수정 불가능
