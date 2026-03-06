"use client";

import { createContext, ReactNode, useContext, useState } from "react";

//make interface
interface TodosContextState {
    todos: { id: string, title: string }[],
    todo: { id: string, title: string },
    addTodo: (todo: { id: string, title: string }) => void,
    deleteTodo: (id: string) => void,
    updateTodo: (todo: { id: string, title: string }) => void,
    setTodo: (todo: { id: string, title: string }) => void,
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

    const addTodo = (todo: { id: string, title: string }) => setTodos([...todos, { title: todo.title, id: new Date().getTime().toString() }]);
    const deleteTodo = (id: string) => setTodos(todos.filter((todo) => todo.id !== id));
    const setTodo = (todo: { id: string, title: string }) => setTodoState({ id: todo.id, title: todo.title });
    const updateTodo = (todo: { id: string, title: string }) => setTodos(todos.map((item) => item.id === todo.id ? todo : item));

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