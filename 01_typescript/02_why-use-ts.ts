
// Todo(할일) 객체에 타입 미리 정의 
type Todo = {
  id: number,
  text: string,
  done: boolean,
}

// 기능 정의 : 전달되는 Todo(할일)객체의 상태를 반전시킨 새로운 Todo 객체를 반환하는 함수 
function toggleTodo(todo: Todo): Todo {
  // 컴파일시점(개발시)에서 타입 오류를 발견 할 수 있음 
  return {
    id: todo.id, // 누락된걸 바로 고쳐잡을 수 있음 
    text: todo.text,
    done: !todo.done
  }
}


/*
// 테스트 (given(테스트할데이터), when(기능실행), then(기대값))
// given
const todo = {
  id: 1,
  text: '우유 사기',
  done: false
};
// when 
const result = toggleTodo(todo);
// then
console.log(`Expect: { id: 1, text: '우유 사기', done: true }`)
console.log('Actual:', result);
*/
