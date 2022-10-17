import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import SingleTodo from "../SingleTodo";
import TodoList from "../TodoList";

describe("Testing TodoList.tsx file", () => {
    test("Testing todo storage", () => {
        render(
            <TodoList
                todos={[
                    {
                        id: 1,
                        content: "Data given by user",
                        isDone: false,
                    },
                    {
                        id: 2,
                        content: "2nd data given by user",
                        isDone: false,
                    },
                ]}
                setTodos={jest.fn()}
            ></TodoList>
        );


        // // method 1
        // const todoItems = screen.getAllByText("Data given by user");
        // expect(todoItems.length).toBe(1);
        
        // method 2
        const todos = screen.getAllByTestId("SingleTodoRootDi")
        expect(todos.length).toBe(2)
    });
});

{
    /* <SingleTodo
    todo={{
        id: 1,
        content: "Data given by user",
        isDone: false,
    }}
    todos={[
        {
            id: 1,
            content: "Data given by user",
            isDone: false,
        },
        {
            id: 2,
            content: "2nd data given by user",
            isDone: false,
        },
    ]}
    setTodos={jest.fn()}
/> */
}
