import { Button, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
  todo: { id: string; title: string }; }) {
  
  const dispatch = useDispatch();
  return (
    <ListGroupItem key={todo.id} className="d-flex justify-content-between">
      {todo.title}
      <div>
        <Button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click" className="me-2"> Edit </Button>
        <Button variant="danger" onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click" className="me-2"> Delete </Button>
      </div>
      </ListGroupItem>);}