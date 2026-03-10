import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

//create interface
interface TodosState {
    todo: { id: string, title: string };
    todos: { id: string, title: string }[];
    addTodo: (todo: { id: string, title: string }) => void;
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string, title: string }) => void;
    updateTodo: (todo: { id: string, title: string }) => void;
}

export const useTodosState = create<TodosState>((set) => ({
    todo: { id: "-1", title: "Learn Mongo" },
    todos: [{ id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node" },
    ],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, { ...todo, id: uuidv4() }]})),
    deleteTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id)})),
    setTodo: (todo) => set((state) => ({ todo: todo})),
    updateTodo: (todo) => set((state) => ({ todos: state.todos.map((item) => item.id === todo.id ? todo : item)})),
}));