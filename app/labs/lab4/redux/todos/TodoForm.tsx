import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todoReducer";
import { RootState } from "../../store";

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem className="d-flex justify-content-between">
      <FormControl value={todo.title}
        onChange={(e) => dispatch(setTodo({...todo, title: e.target.value }))}/>
      <Button onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click" className="m-1"> Update </Button>
      <Button variant="success" onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click" className="m-1"> Add </Button>
    </ListGroupItem>
);}
