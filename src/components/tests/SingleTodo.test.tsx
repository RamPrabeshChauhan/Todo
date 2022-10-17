import { render, screen, logRoles } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SingleTodo from "../SingleTodo";

describe("Testing SingleTodo.tsx file", () => {
    test("checking todos", () => {
        render(
            <SingleTodo
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
            />
        );

        const todo = screen.getByText(/Data given by user/i);
        expect(todo).toBeInTheDocument();

        const todos = screen.getAllByTestId("SingleTodoRootDi");
        expect(todos.length).toBe(1);
    });

    test("checking button", () => {
        render(
            <SingleTodo
                todo={{
                    id: 1,
                    content: "hiiiiiiiii",
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
            />
        );

        const editButton = screen.getByTestId("test1");
        const tickButton = screen.getByTestId("test2");
        const deleteButton = screen.getByTestId("test3");

        userEvent.click(editButton);
        userEvent.click(tickButton);
        userEvent.click(deleteButton);
    });
});
