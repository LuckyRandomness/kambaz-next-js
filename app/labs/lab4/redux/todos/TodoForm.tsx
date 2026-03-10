import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { RootState } from "../../store";

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem className="d-flex justify-content-between">
      <FormControl value={todo.title} className="me-2"
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
      <Button className="btn-warning me-2" onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </Button>
      <Button className="btn-success me-2" onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </Button>      
    </ListGroupItem>
);}
