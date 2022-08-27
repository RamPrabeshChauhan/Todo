import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { TodoDetail } from "./Model";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<TodoDetail[]>([]);
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), content: todo, isDone: false }]);
            setTodo("");
        }
    };

    return (
        <div className="app_container">
            <h1 className="heading">Todo</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
