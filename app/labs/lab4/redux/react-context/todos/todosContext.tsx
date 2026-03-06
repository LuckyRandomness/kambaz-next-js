"use client";

import { createContext, ReactNode, useContext, useState } from "react";

//make interface
interface TodosContextState {
    todos: { id: string, title: string }[],
    todo: { id: string, title: string },
    addTodo: () => void,
    deleteTodo: () => void,
    updateTodo: () => void,
    setTodo: () => void,
}

//create context
const TodosContext = createContext<TodosContextState | undefined>(
    undefined,
);

export const TodosProvider = ({ children } : { children: ReactNode }) => {
    const [todos, setTodos] = useState([
        { id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node" },
    ]);
    const [todo, setTodoState] = useState({ id: "-1", title: "Learn Mongo" });

    const addTodo = () => setTodos([...todos, { title: todo.title, id: new Date().getTime().toString() }]);
    const deleteTodo = () => setTodos(todos.filter((todo) => todo.id !== todo.id));
    const setTodo = () => setTodoState({ id: "-1", title: "New" });
    const updateTodo = () => setTodos(todos.map((item) => item.id === item.id ? item : item));

    const value: TodosContextState = {
        todos,
        todo,
        addTodo,
        deleteTodo,
        setTodo,
        updateTodo
    };

    return(<TodosContext.Provider value={value}>{children}</TodosContext.Provider>);
};

export const useTodos = () => {
    const context = useContext(TodosContext);
    return context;
};