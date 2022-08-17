import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Products from "../components/Products";
import ProductProvider from "../components/ProductContext";

// USER STORY:
// As a visitor I want to be able to search for a specific pet

// Test Cases:
// It renders an input field
// it searches for the text that was typed in the input field

describe("Products", () => {
  it("renders without crashing", () => {
    render(
      <ProductProvider>
        <Products />
      </ProductProvider>
    );
  });

  it("renders an input field", () => {
    render(
      <ProductProvider>
        <Products />
      </ProductProvider>
    );

    const maybeInput = screen.getByPlaceholderText("Search");

    expect(maybeInput).toBeInTheDocument();
  });

  it("searches for the text that was typed in the input field", () => {
    const testData = [
      {
        id: 1,
        name: "Sour Pricklypear",
        price: 99,
        stock: 3,
        cart: 0,
        image: "http://dummyimage.com/129x100.png/dddddd/000000",
      },
      {
        id: 2,
        name: "Striped Hawksbeard",
        price: 199,
        stock: 5,
        cart: 2,
        image: "http://dummyimage.com/129x100.png/dddddd/000000",
      },
    ];
    render(
      <ProductProvider>
        <Products />
      </ProductProvider>
    );
    // There should now be 2

    const searchInput = screen.getByPlaceholderText("Search");
    const actualInput = userEvent.type(searchInput, "Sour Pricklypear");
    console.log(actualInput);

    const maybeSearchResult = screen.queryByText("Sour Pricklypear");
    expect(maybeSearchResult).toBeInTheDocument();
  });
});
