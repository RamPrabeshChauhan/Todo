import React from "react";
import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import InputField from "../InputField";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("InputField test cases", () => {
    test("Input field presented", () => {
        render(<InputField todo="My first data" setTodo={jest.fn} handleAdd={jest.fn()} />);
        // logRoles(screen.getByTestId("InputFieldRootDiv"));
        const inputTag = screen.getByPlaceholderText(/enter your task/i); // "/enter ---/i" is called ragex.
        expect(inputTag).toBeInTheDocument();
    });

    test("Input field initial value empty", () => {
        render(<InputField todo="" setTodo={jest.fn} handleAdd={jest.fn()} />);
        const inputValue = screen.getByPlaceholderText(/enter your task/i);
        expect(inputValue).toHaveValue("");

        // const onBlurSpy2 = jest.spyOn(inputValue.instance(), "blurFunction");
    });

    test("Add button is presented", () => {
        render(<InputField todo="My first data" setTodo={jest.fn} handleAdd={jest.fn()} />);
        const addButton = screen.getByRole("button", {
            name: /add/i,
        });
        expect(addButton).toBeInTheDocument();
    });

    // const mockedTodo = "Giving some data in input field";
    const mockedSetTodo = jest.fn();
    // const mockedHandler = jest.fn();
    const mockedHandler = jest.fn(
        
    );
    // const onSubmit = jest.fn();

    test("Submitting value by using <input> and <button>", () => {
        // onSubmit.mockImplementation(event => {
        //     event.preventDefault();
        //   });

        const onSubmit = jest.fn();
        window.HTMLFormElement.prototype.submit = () => {};

        render(<InputField todo={"Giving some data in input field"} setTodo={mockedSetTodo} handleAdd={mockedHandler} />);
        const inputTag = screen.getByPlaceholderText(/enter your task/i);
        const addButton = screen.getByRole("button", {
            name: /add/i,
        });

        act(() => {
            // // method 1
            // fireEvent.change(inputTag, { target: { value: "Giving some data in input field" } });
            // method 2
            userEvent.type(inputTag, "Giving some data in input field");
        });

        // // method 1
        // fireEvent.click(addButton);

        // method 2
        userEvent.click(addButton);
        expect(mockedHandler).toHaveBeenCalled();
    });
});
