import { useState, useContext } from "react";
import { ProductContext } from "./components/ProductContext";
import { Card, Form, Button } from "semantic-ui-react";
import Products from "./components/Products";
import Login from "./components/Login";
import Cart from "./components/Cart";
function App() {
  const {
    products,
    setProducts,
    showSignIn,
    setShowSignIn,
    showCart,
    setShowCart,
    loggedIn,
    setLoggedIn,
  } = useContext(ProductContext);

  function toggleLogin(){
   
      if(loggedIn) setLoggedIn(!loggedIn)
      else{
        setShowSignIn(true)
        localStorage.setItem("loggedIn", JSON.stringify(false));
        setLoggedIn(false)
      }
  }

  return (
    <div className="h-[100%] w-screen bg-cover flex flex-col items-center bg-zinc-300">
      <div className="flex pb-6 pt-4">
        <button
          className="p-4 border-b-2 hover:border-indigo-500"
          disabled ={!loggedIn}
          onClick={() => setShowCart(!showCart)}
        >
          {showCart ? "Close" : "Open"} cart
         
        </button>
        <button
          className="p-4 border-b-2 hover:border-indigo-500"
          onClick={() => toggleLogin()
          }
          >
          Sign {loggedIn ? "out" : "in"}
        </button>
      </div>

      {showCart && loggedIn && <Cart />}
      {showSignIn && <Login />}
      <div className="pt-6">
        <h1 className="text-center text-4xl py-4">Products</h1>
        <Products />
      </div>
    </div>
  );
}

export default App;
