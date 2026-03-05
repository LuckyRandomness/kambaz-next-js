import { useState } from "react";
import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";
export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node" }]);
    const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
    const addTodo = (todo: any) => {
        const newTodos = [...todos, {...todo, id: new Date().getTime().toString() }];
        setTodos(newTodos);
        setTodo({id: "-1", title: ""});
    };
    const deleteTodo = (id: string) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };
    const updateTodo = (todo: any) => {
        const newTodos = todos.map((item) => (item.id === todo.id ? todo : item));
        setTodos(newTodos);
        setTodo({ id: "-1", title: "" });
    }
    return(
        <div>
            <h2>Todo List</h2>
            <ListGroup>
                <ListGroupItem className="d-flex justify-content-between">
                    <FormControl value={todo.title}
                        onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
                    <Button variant="warning" onClick={() => updateTodo(todo)} id="wd-update-todo-click"> 
                        Update </Button>
                    <Button variant="success" onClick={() => addTodo(todo)} id="wd-add-todo-click"> 
                        Add </Button>
                </ListGroupItem>
                {todos.map((todo) => (
                    <ListGroupItem key={todo.id} className="d-flex justify-content-between">
                        <Button onClick={() => setTodo(todo)} id="wd-set-todo-click">
                            Edit </Button>
                        <Button variant="danger" onClick={() => deleteTodo(todo.id)} id="wd-delete-todo-click">
                            Delete </Button>
                    </ListGroupItem>
                ))}
            </ListGroup> <hr />
</div>);}