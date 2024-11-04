import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../utilitys/AddToDB";

const AddtoCard = () => {
  const allCard = useLoaderData()
  const [addCard, setAddCard] = useState([])
  const [cost, setCost] = useState(0)

  useEffect(()=>{
    const addToCardId = getStoredCartList();
    const convertIntCardId = addToCardId.map(id => parseInt(id));
    const filterCard = allCard.filter(card => convertIntCardId.includes(card.id)) 
    setAddCard(filterCard);

  }, [allCard, cost, setAddCard])
  return (
    <div className='w-11/12 mx-auto'>
      <div className="flex flex-col md:flex-row justify-between py-5">
        <div>
          <h2 className="font-bold text-2xl">Cart</h2>
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-bold text-base">Total Cost: {cost}</p>
          <button className="btn btn-sm rounded-full font-bold text-base bg-white text-[#9538E2] border-[#9538E2] hover:bg-white">Sort by Price</button>
          <button className="btn btn-sm rounded-full bg-[#9538E2] text-white hover:bg-[#9538E2] border-[#9538E2] font-bold text-base">Purchase</button>
        </div>
      </div>
      
      {
        addCard.map(card => <p key={card.id}>{card.name}</p>)
      }
    </div>
  );
};

export default AddtoCard;