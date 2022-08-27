import React from "react";
import { TodoDetail } from "../Model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";

interface Props {
    todo: TodoDetail;
    todos: TodoDetail[];
    setTodos: React.Dispatch<React.SetStateAction<TodoDetail[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const HandleDone = (id: number) => {
        setTodos(todos.map((data) => (data.id === id ? { ...data, isDone: !data.isDone } : data)));
    };

    const HandleDelete = (id: number) => {
        setTodos(todos.filter((data) => data.id !== id));
    };

    console.log("SingleTodo.tsx", todo);
    return (
        <div className="todos_single" key={todo.id}>
            {todo.isDone ? <s className="todos_single_text">{todo.content}</s> : <span className="todos_single_text">{todo.content}</span>}

            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>

                <span className="icon" onClick={() => HandleDone(todo.id)}>
                    <MdDone />
                </span>
                <span className="icon" onClick={() => HandleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
            </div>
        </div>
    );
};

export default SingleTodo;
