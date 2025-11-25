import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (title: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add new todo..."
        value={value}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
