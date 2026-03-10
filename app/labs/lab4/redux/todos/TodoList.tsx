import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { RootState } from "../../store";
export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem
            todo={todo} />
        ))}
      </ListGroup><hr/>
</div>);}