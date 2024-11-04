import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import Product from "./Product";
import Error from "../pages/Error";

const ItemsCard = () => {
  const products = useLoaderData({});
  const {card} = useParams();
  const [items, setItems] = useState([]);
  useEffect(()=>{
    if(card){
      const filterCard = [...products].filter(product => product.category === card);
      setItems(filterCard);
    }
    else{
      setItems(products);
    }
  }, [card, products, setItems])
  return (
    <div>
      {
        items.length === 0 ? <div className="w-full flex flex-col items-center justify-center pt-20">
          <div><img src="https://i.ibb.co.com/MkmFJVc/error.webp" alt="" /></div>
        <div><h2 className="font-bold text-3xl">Oppss!! No product Available.</h2></div>
        </div> : 
        <div  className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
          items.map(item => <Product key={item.id} item={item}></Product>)
          }
        </div>
      }
    </div>
  );
};

export default ItemsCard;