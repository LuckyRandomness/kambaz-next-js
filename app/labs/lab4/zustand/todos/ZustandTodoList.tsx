"use client";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { useTodosState } from "./useTodoStore";

export default function ZustandTodos() {
    const { todo, todos, addTodo, deleteTodo, setTodo, updateTodo } = useTodosState(
        (state) => state,
    );

    return(
      <div>
        <h2>Todo List</h2>
        <ListGroup>
            <ListGroupItem className="d-flex justify-content-between">
                <FormControl value={todo.title}
                onChange={(e) => setTodo({...todo, title: e.target.value })}/>
                <Button onClick={() => updateTodo(todo)}
                        variant="warning" id="wd-update-todo-click" className="m-1"> Update </Button>
                <Button variant="success" onClick={() => addTodo(todo)}
                        id="wd-add-todo-click" className="m-1"> Add </Button>
            </ListGroupItem>
            {todos.map((todo: any) => (
                <ListGroupItem className="d-flex justify-content-between" key={todo.id}>
                        {todo.title}
                        <div>
                            <Button className="m-1" onClick={() => setTodo(todo)}
                                    id="wd-set-todo-click"> Edit </Button>
                            <Button variant="danger" className="m-1" onClick={() => deleteTodo(todo.id)}
                                    id="wd-delete-todo-click"> Delete </Button>
                        </div>
                </ListGroupItem>
            ))}
        </ListGroup><hr/>
    </div>
    );
}