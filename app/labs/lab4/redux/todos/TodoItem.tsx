import { ListGroupItem, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todoReducer";

export default function TodoItem({ todo }: {
  todo: { id: string; title: string };}
) {
    const dispatch = useDispatch();
    return(
      <ListGroupItem className="d-flex justify-content-between" key={todo.id}>
        {todo.title}
        <div>
            <Button variant="danger" className="m-1" onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"> Delete </Button>
            <Button className="m-1" onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"> Edit </Button>
        </div>
</ListGroupItem>);}