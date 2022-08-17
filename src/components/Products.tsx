import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../components/ProductContext";
import ProductCard from "../components/ProductCard";
function Products() {
  const { products, setProducts } = useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterText, setFilterText] = useState('');
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(()=>{
  
    let modded = [...products];
    modded = modded.filter((item)=>{
      return item.name.toLowerCase().includes(filterText);
    })
    setFilteredProducts(modded)
  },[filterText])

  return (
    <div>
     
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setFilterText(e.target.value.toLowerCase())}
        className="w-[30%] ml-[35%] text-center border-2 border-zinc-500 m-auto"
      />
      <ul className="grid grid-cols-4 gap-10 mt-6 mb-6">
        {filteredProducts?.map((item: any, index: number) => {
          return <ProductCard key={index} item={item} />;
        })}
        ;
      </ul>
    </div>
  );
}

export default Products;
