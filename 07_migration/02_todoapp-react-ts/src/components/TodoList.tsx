import React from "react";
import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
}
function TodoList({ todos, toggleComplete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        );
      })}
    </ul>
  );
}

export default TodoList;
