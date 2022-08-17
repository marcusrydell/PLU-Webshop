import {useContext} from 'react'
import { ProductContext } from "../components/ProductContext";
function ProductCard({item}: any) {
    const {
        products,
        setProducts,
        loggedIn,

      } = useContext(ProductContext);

      function addToCart(item: any){
        let modded = products;
        if(modded[item.id-1].stock >0){
            modded[item.id-1].stock -=1;
            modded[item.id-1].cart +=1;
        }
        setProducts([...modded]);

      }

      function getProductAvailability(){
          if(!loggedIn){
              return 'Sign in to buy';
          }
          if(item.stock ===0){
              return 'Out of stock';
          }
          return `Add to cart`;
      }
  return (

    <div className='border-2 border-indigo-400 p-4'>
        <img src={item.image} className="h-[260px] w-[200px] "/>
        <p>{item.name}</p>
        <p>{item.price}:-</p>
        
        <button className='border-2 p-[4px] px-6 border-indigo-400 hover:bg-indigo-200'
            disabled={!loggedIn || item.stock ===0}
            onClick={()=> addToCart(item)}
        >
            {getProductAvailability()}
        </button>
        {item.stock > 0 ? <p>{item.stock}: left in stock!</p> : ''}
    </div>
  )
}

export default ProductCard