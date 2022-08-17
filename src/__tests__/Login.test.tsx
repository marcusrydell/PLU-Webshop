import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../components/Login";
import ProductProvider from "../components/ProductContext";
import userEvent from "@testing-library/user-event";


describe("LoginModal", () => {
    it("renders without crashing", () => {
        render(
            <ProductProvider>
                <Login />
            </ProductProvider>
        );
    });

    it("renders two input fields", () => {
        render(
            <ProductProvider>
                <Login />
            </ProductProvider>
        );

        const usernameInput = screen.getByPlaceholderText("Username");
        expect(usernameInput).toBeInTheDocument();
        const passwordInput = screen.getByPlaceholderText("Password");
        expect(passwordInput).toBeInTheDocument();
    });

});