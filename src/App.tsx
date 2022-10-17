import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { TodoDetail } from "./Model";

// App : React.FC = in typescript you have to tell that what type of function it was
const App: React.FC = () => {
    const [todo, setTodo] = useState<string>(""); // "useState<string>" defining what type of state it will be
    const [todos, setTodos] = useState<TodoDetail[]>([]); // importing type template for todo items

    // "event" need type
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault(); //to prevent page refresh after submitting
        if (todo) {
            setTodos([...todos, { id: Date.now(), content: todo, isDone: false }]);
            setTodo("");
        }
    };

    // console.log("a",todo);
    console.log("App.tsx", todos);

    return (
        // "data-testid" to add test id.
        <div className="app_container" data-testid="AppRootDiv">
            <h1 className="heading">Todo</h1>
            {/* data access  */}
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
