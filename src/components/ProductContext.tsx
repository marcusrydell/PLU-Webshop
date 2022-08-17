import React, { useState, createContext } from "react";

export const ProductContext = createContext<any>(null);

const ProductProvider = ({ children }: any) => {

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") as string) || [{
      "id": 1,
      "name": "'ekoko",
      "price": 19,
      "stock": 20,
      "cart": 7,
      "image": "http://dummyimage.com/129x100.png/dddddd/000000"
  }, {
      "id": 2,
      "name": "Iwatsukiella Moss",
      "price": 96,
      "stock": 31,
      "cart": 17,
      "image": "http://dummyimage.com/190x100.png/dddddd/000000"
  }, {
      "id": 3,
      "name": "Texan Hogplum",
      "price": 42,
      "stock": 27,
      "cart": 5,
      "image": "http://dummyimage.com/132x100.png/cc0000/ffffff"
  }, {
      "id": 4,
      "name": "Rough Canada Goldenrod",
      "price": 36,
      "stock": 3,
      "cart": 20,
      "image": "http://dummyimage.com/119x100.png/ff4444/ffffff"
  }, {
      "id": 5,
      "name": "Sour Pricklypear",
      "price": 9,
      "stock": 67,
      "cart": 4,
      "image": "http://dummyimage.com/115x100.png/ff4444/ffffff"
  }, {
      "id": 6,
      "name": "Striped Hawksbeard",
      "price": 62,
      "stock": 55,
      "cart": 5,
      "image": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
      "id": 7,
      "name": "Wedgeleaf Horkelia",
      "price": 74,
      "stock": 82,
      "cart": 6,
      "image": "http://dummyimage.com/158x100.png/cc0000/ffffff"
  }, {
      "id": 8,
      "name": "Rock Goldenrod",
      "price": 2,
      "stock": 33,
      "cart": 3,
      "image": "http://dummyimage.com/190x100.png/5fa2dd/ffffff"
  }, {
      "id": 9,
      "name": "Maui Islandmint",
      "price": 18,
      "stock": 59,
      "cart": 5,
      "image": "http://dummyimage.com/181x100.png/dddddd/000000"
  }, {
      "id": 10,
      "name": "Mexican Bedstraw",
      "price": 73,
      "stock": 63,
      "cart": 22,
      "image": "http://dummyimage.com/135x100.png/5fa2dd/ffffff"
  }, {
      "id": 11,
      "name": "Mule-ears",
      "price": 28,
      "stock": 61,
      "cart": 38,
      "image": "http://dummyimage.com/111x100.png/cc0000/ffffff"
  }, {
      "id": 12,
      "name": "Chia",
      "price": 29,
      "stock": 26,
      "cart": 52,
      "image": "http://dummyimage.com/180x100.png/5fa2dd/ffffff"
  }, {
      "id": 13,
      "name": "Wheel Milkweed",
      "price": 55,
      "stock": 63,
      "cart": 24,
      "image": "http://dummyimage.com/216x100.png/cc0000/ffffff"
  }, {
      "id": 14,
      "name": "Beach Plum",
      "price": 64,
      "stock": 67,
      "cart": 17,
      "image": "http://dummyimage.com/220x100.png/5fa2dd/ffffff"
  }, {
      "id": 15,
      "name": "Pinescrub Bluestem",
      "price": 34,
      "stock": 95,
      "cart": 27,
      "image": "http://dummyimage.com/127x100.png/dddddd/000000"
  }]
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems") as string) || [{}]
  );
  const [loggedIn, setLoggedIn] = useState<boolean>(
    JSON.parse(localStorage.getItem("loggedIn") as string) || false
  );
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        showSignIn,
        setShowSignIn,
        showCart,
        setShowCart,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
