import toast from "react-hot-toast";

const getStoredCartList = ()=>{
  const addCardStr = localStorage.getItem('card-list');
  if(addCardStr){
    const storedCardData = JSON.parse(addCardStr);
    return storedCardData;
  }
  else{
    return [];
  }

}

const setStoredCardList = (id, name)=>{
  const storedCard = getStoredCartList();
    storedCard.push(id);
    const storedCardList = JSON.stringify(storedCard);
    localStorage.setItem('card-list', storedCardList);
    toast.success(`${name} successfully added to cart!`);
}

const removecard = (idx, name)=>{
  const allReadyAddedCard = getStoredCartList();
  const remaining = allReadyAddedCard.filter(id => JSON.parse(id) != idx);
  localStorage.setItem('card-list', JSON.stringify(remaining));
  toast.success(`${name} successfully remove!!`)

}

const getStoredWishList = ()=>{
  const addWishStr = localStorage.getItem('wish-list');
  if(addWishStr){
    const storedWishData = JSON.parse(addWishStr);
    return storedWishData;
  }
  else{
    return [];
  }

}

const setStoredWishList = (id, name)=>{
  const storedWish = getStoredWishList();
    storedWish.push(id);
    const storedWishList = JSON.stringify(storedWish);
    localStorage.setItem('wish-list', storedWishList);
    toast.success(`${name} successfully added to wishlist!`);
}

const removeWish = (idx, name)=>{
  const allReadyAddedWish = getStoredWishList();
  const remaining = allReadyAddedWish.filter(id => JSON.parse(id) != idx);
  localStorage.setItem('wish-list', JSON.stringify(remaining));
  toast.success(`${name} successfully remove!!`)

}

export {setStoredCardList, getStoredCartList, setStoredWishList, getStoredWishList, removecard, removeWish}