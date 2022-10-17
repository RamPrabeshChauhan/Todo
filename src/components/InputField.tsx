import React, { useRef } from "react";
import "./style.css";

interface Props {
    todo: string; //copy type from parent component state
    setTodo: React.Dispatch<React.SetStateAction<string>>; //copy type from parent component state
    handleAdd: (e: React.FormEvent) => void; // "event" need type
}

//"React.FC" for component and "<Props>" for function parameter type
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form
            className="input_container"
            onSubmit={(e) => {
                handleAdd(e);
                // this will show if you do not give useRef type
                //Property 'blur' does not exist on type 'never'
                //and type you will get when you hover over "<input" tag
                inputRef.current?.blur();
            }}
            data-testid="InputFieldRootDiv"
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
