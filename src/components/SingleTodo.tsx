import React, { useEffect, useRef, useState } from "react";
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
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.content);

    const HandleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((data) => (data.id === id ? { ...data, content: editTodo } : data)));
        setEdit(false);
    };

    const HandleDelete = (id: number) => {
        setTodos(todos.filter((data) => data.id !== id));
    };

    const HandleDone = (id: number) => {
        setTodos(todos.map((data) => (data.id === id ? { ...data, isDone: !data.isDone } : data)));
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    console.log("SingleTodo.tsx", todo);
    return (
        <form className="todos_single" key={todo.id} onSubmit={(e) => HandleEdit(e, todo.id)}>
            {edit ? (
                <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos_single_text" />
            ) : todo.isDone ? (
                <s className="todos_single_text">{todo.content}</s>
            ) : (
                <span className="todos_single_text">{todo.content}</span>
            )}

            <div>
                <span
                    className="icon"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>

                <span className="icon" onClick={() => HandleDone(todo.id)}>
                    <MdDone />
                </span>
                <span className="icon" onClick={() => HandleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
