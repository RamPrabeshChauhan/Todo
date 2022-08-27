import React, { useRef } from "react";
import "./style.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}


const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form
            className="input_container"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="input_box"
                type="text"
                placeholder="Enter your task"
            />
            <button className="input_submit" type="submit">
                Add
            </button>
        </form>
    );
};

export default InputField;
