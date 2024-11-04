import { useEffect, useState } from "react";
import { getStoredWishList, removeWish } from "../utilitys/AddToDB";
import { useLoaderData } from "react-router-dom";

const Wishlist = () => {
  const allCard = useLoaderData()
  const [addCard, setAddCard] = useState([])
  useEffect(()=>{
    const addToCardId = getStoredWishList();
    const convertIntCardId = addToCardId.map(id => parseInt(id));
    const filterCard = allCard.filter(card => convertIntCardId.includes(card.id)) 
    setAddCard(filterCard);
  }, [addCard])

  const handleRemoveWish= (id, name)=>{

    removeWish(id, name);

    const addToCardId = getStoredWishList();
    const convertIntCardId = addToCardId.map(id => parseInt(id));
    const filterCard = allCard.filter(card => convertIntCardId.includes(card.id)) 
    setAddCard(filterCard);
  }
  return (
    <div className='w-11/12 mx-auto flex-col gap-4 py-10'>
      <div className="flex flex-col gap-4">
      {
        addCard.map(card => <div className="w-full flex justify-between items-center py-5 border-2 rounded-xl px-3" key={card.id}>
          <div className="flex gap-4 items-center">
          <div className="w-16 h-16 border-2 bg-slate-100 rounded-md">
            <img 
            className="w-full h-full"
            src={card.image} alt="" />
          </div>
          <div>
            <p className="font-bold text-xl">{card.name}</p>
            <p className="font-bold text-base">{card.description}</p>
            <p className="font-bold text-base">Price: {card.price}$</p>
          </div>
          </div>
          <div>
            <button onClick={()=>handleRemoveWish(card.id, card.name)} className="btn btn-sm font-bold text-lg text-red-500 rounded-full border-red-500"><i className="fa-solid fa-xmark"></i></button>
          </div>
        </div>)
      }
      </div>
    </div>
  );
};

export default Wishlist;