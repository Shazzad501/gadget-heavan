import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, removecard } from "../utilitys/AddToDB";
import Modal from "./Modal";

const AddtoCard = () => {
  const allCard = useLoaderData()
  const [addCard, setAddCard] = useState([])
  const [cost, setCost] = useState(0)
  const [payment, setPayment] = useState(0)

  useEffect(()=>{
    const addToCardId = getStoredCartList();
    const convertIntCardId = addToCardId.map(id => parseInt(id));
    const filterCard = allCard.filter(card => convertIntCardId.includes(card.id)) 
    setAddCard(filterCard);

    const totalCost = filterCard.reduce((sum, card) => sum + card.price, 0).toFixed(2);
    setCost(totalCost);

  }, [allCard, setAddCard])

  const handleSort = ()=>{
    const sorted = [...addCard].sort((a, b)=> b.price - a.price)
    setAddCard(sorted)
  }

  const handlePurchase= (cost)=>{
    localStorage.removeItem('card-list')
    setAddCard([])
    document.getElementById('my_modal_1').showModal()
    setPayment(cost)
    setCost(0)
  }

  const handleRemoveToLS = (id, name, cardPrice)=>{
    removecard(id, name);

    const addToCardId = getStoredCartList();
    const convertIntCardId = addToCardId.map(id => parseInt(id));
    const filterCard = allCard.filter(card => convertIntCardId.includes(card.id)) 
    setAddCard(filterCard);

    setCost((cost - cardPrice).toFixed(2))
  }
  return (
    <div className='w-11/12 mx-auto'>
      <div className="flex flex-col md:flex-row justify-between py-7">
        <div>
          <h2 className="font-bold text-2xl">Cart</h2>
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-bold text-base">Total Cost: {cost}</p>
          <button onClick={handleSort} className="btn btn-sm rounded-full font-bold text-base bg-white text-[#9538E2] border-[#9538E2] hover:bg-white">Sort by Price</button>
          <button onClick={()=>handlePurchase(cost)} className="btn btn-sm rounded-full bg-[#9538E2] text-white hover:bg-[#9538E2] border-[#9538E2] font-bold text-base">Purchase</button>
        </div>
      </div>
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

            <button 
            onClick={()=> handleRemoveToLS(card.id, card.name, card.price)}
            className="btn btn-sm font-bold text-lg text-red-500 rounded-full border-red-500"><i className="fa-solid fa-xmark"></i></button>
          </div>
        </div>)
      }
      </div>
        <Modal payment={payment}></Modal>
    </div>
  );
};

export default AddtoCard;