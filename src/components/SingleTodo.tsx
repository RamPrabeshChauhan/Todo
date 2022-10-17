import React, { useEffect, useRef, useState } from "react";
import { TodoDetail } from "../Model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
    todo: TodoDetail; //receving single data
    todos: TodoDetail[]; //receving array
    setTodos: React.Dispatch<React.SetStateAction<TodoDetail[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.content); //carrying todo value

    const HandleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((data) => (data.id === id ? { ...data, content: editTodo } : data)));
        setEdit(false);
    };

    const HandleDelete = (id: number) => {
        // "!==" means if "id" will not match then it will kickout from the array "===" means only matching id will show all will be kickedout from array
        setTodos(todos.filter((data) => data.id !== id));
    };

    const HandleDone = (id: number) => {
        // mapping array and selecting specific "id" to manipulate "isDone" value
        setTodos(todos.map((data) => (data.id === id ? { ...data, isDone: !data.isDone } : data)));
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        //when we go for edit the cursor will be active
        inputRef.current?.focus();
    }, [edit]); //whenever edit will change "useEffect" will run

    console.log("SingleTodo.tsx", todo);
    return (
        // I was stuck because instead of using "form" tag I was using "div" so that "onSubmit" was not working.
        <form className="todos_single" key={todo.id} onSubmit={(e) => HandleEdit(e, todo.id)} data-testid="SingleTodoRootDi">
            {edit ? (
                <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos_single_text" />
            ) : todo.isDone ? (
                <s className="todos_single_text">{todo.content}</s>
            ) : (
                <span className="todos_single_text">{todo.content}</span>
            )}

            <div data-testid="SecondTestId">
                <span
                    className="icon" data-testid="test1"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>

                {/* sending id to HandleDone */}
                <span className="icon" data-testid="test2" onClick={() => HandleDone(todo.id)}>
                    <MdDone />
                </span>
                <span className="icon" data-testid="test3" onClick={() => HandleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
