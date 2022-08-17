import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import ProductProvider from "../components/ProductContext";
import userEvent from "@testing-library/user-event";
test("it renders the main page", () => {
  render(
    <ProductProvider>
      <App />
    </ProductProvider>
  );

  const headerEl = screen.getByText("Products");

  expect(headerEl).toBeInTheDocument();
});


