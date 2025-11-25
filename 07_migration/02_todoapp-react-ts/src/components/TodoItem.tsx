import React from "react";
import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
}

// 한개의 할일 정보를 표현하는 컴포넌트
// 기능 : 할일 클릭시 할일 completed 상태를 반전
function TodoItem({ todo, toggleComplete }: TodoItemProps) {
  const handleClick = (): void => {
    toggleComplete(todo.id);
  };
  const itemStyle: React.CSSProperties = {
    textDecoration: todo.completed ? "line-through" : "none",
    cursor: "pointer",
    margin: "5px 0",
  };
  return (
    <li style={itemStyle} onClick={handleClick}>
      {todo.title}
    </li>
  );
}

export default TodoItem;
