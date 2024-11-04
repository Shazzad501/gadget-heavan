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
}

export {setStoredCardList, getStoredCartList}