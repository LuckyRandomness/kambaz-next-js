"use client";
import { ListGroup } from "react-bootstrap";
import { useTodos } from "./todosContext";
import TodoForm from "../../todos/TodoForm";
import TodoItem from "../../todos/TodoItem";

export default function TodosContext() {
    const { todos, todo, addTodo, deleteTodo, setTodo, updateTodo } = useTodos()!;

    return(
        <div>
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: any) => (
            <TodoItem todo={todo} />
        ))}
      </ListGroup><hr/>
</div>
    );
}