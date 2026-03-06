"use client";

import CounterContext from "./counter";
import { CounterProvider } from "./counter/context";
import TodosContext from "./todos/ReactContextTodoList";
import { TodosProvider } from "./todos/todosContext";

export default function ReactContextExamples() {
    return (
        <div>
            <h1>React Context Examples</h1>
            <CounterProvider>
                <CounterContext />
            </CounterProvider>
            <TodosProvider>
                <TodosContext />
            </TodosProvider>
        </div>
    );
}