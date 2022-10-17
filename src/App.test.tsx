import { logRoles, render, screen } from "@testing-library/react";
import App from "./App";

// .test.js, .spec.js, .js is (__tests__) directory

describe("App test cases", () => {
    test("Website heading presented", () => {
        render(<App />);
        // logRoles(screen.getByTestId("AppRootDiv")) // to know all the HTML tag role.
        const headingElement = screen.getByRole("heading", {
            name: "Todo",
            //exact: false, // after using this "name" value become case insensitive.
        });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent("Todo");
    });

    test("Button is not presented", () => {
        render(<App />);
        const buttonElem = screen.queryByRole("button", {
            name: "Button",
        });
        expect(buttonElem).not.toBeInTheDocument();
    });
});
