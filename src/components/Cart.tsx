import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../components/ProductContext";
function Cart() {
  const { products, setProducts } = useContext(ProductContext);

  const [cartItems, setCartItems] = useState(
    products.flatMap((x: any, index: number) => {
      if (x.cart > 0)
        return {
          id: x.id,
          name: x.name,
          image: x.image,
          cost: x.cost,
          stock: x.stock,
          cart: x.cart,
        };
      else return [];
    })
  );

  useEffect(() => {
    setCartItems(
      products.flatMap((x: any, index: number) => {
        if (x.cart > 0)
          return {
            id: x.id,
            name: x.name,
            image: x.image,
            price: x.price,
            stock: x.stock,
            cart: x.cart,
          };
        else return [];
      })
    );
  }, [products]);

  function addQty(id: number) {
    let modded = products;
    if (modded[id - 1].stock > 0) {
      modded[id - 1].stock -= 1;
      modded[id - 1].cart += 1;
    }
    setProducts([...modded]);
  }
  function reduceQty(id: number) {
    let modded = products;
    if (modded[id - 1].cart > 0) {
      modded[id - 1].stock += 1;
      modded[id - 1].cart -= 1;
    }
    setProducts([...modded]);
  }

  return (<>
      <h1 className="text-center text-2xl">Cart</h1>
    <div className="grid grid-cols-4 gap-10 mt-6 mb-6 pb-6">
      {cartItems.map((item: any, index: number) => {
        return (
          <div key={index} className="border-2 border-indigo-400 p-4">
            <img className="h-[100px] w-[100px]" src={item.image}/>
            <p>{item.name}</p>
            <p>{item.price}:-</p>

            <div className="flex">
              <button
                className="border-2 px-6 border-indigo-400 hover:bg-indigo-500"
                onClick={() => addQty(item.id)}
              >
                +
              </button>
              <h3 className="p-2">{item.cart}</h3>
              <button
                className="border-2 px-6 border-indigo-400 hover:bg-indigo-500"
                onClick={() => reduceQty(item.id)}
              >
                -
              </button>
            </div>
              <p>{item.stock} left in stock</p>
          </div>
        );
      })}
      <p className="text-right p-4 text-2xl">Total amount: {cartItems.map((x: any) => x.price * x.cart).reduce((prev: any, next: any) => prev+next)}:- </p>
    </div>
    </>
  );
}

export default Cart;
