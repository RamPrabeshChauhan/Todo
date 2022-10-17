import React from "react";
import { TodoDetail } from "../Model";
import SingleTodo from "./SingleTodo";
import "./style.css";

interface Props {
    todos: TodoDetail[];
    setTodos: React.Dispatch<React.SetStateAction<TodoDetail[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {todos.map((data) => {
                return (
                    <SingleTodo
                        todo={data} //sending single data
                        key={data.id}
                        todos={todos} //sending array
                        setTodos={setTodos}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
