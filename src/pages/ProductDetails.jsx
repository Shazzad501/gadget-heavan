import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Rating from "react-rating";
import { getStoredWishList, setStoredCardList, setStoredWishList } from "../utilitys/AddToDB";

const ProductDetails = () => {
  const {itemId} = useParams()
  const productId = parseInt(itemId);
  const productsData = useLoaderData()
  const [product, setProduct] = useState({})
  const [isHeart, setIsHeart] = useState(false);
  useEffect(()=>{
    const findedProduct = productsData.find(product => product.id === productId)
    setProduct(findedProduct || {});

    const isWishList = getStoredWishList();
    const isExist = isWishList.find(id => JSON.parse(id) === findedProduct.id)
    if(isExist){
      setIsHeart(true)
    }
    document.title = "Details || Gadget Heaven"
  }, [productsData, setProduct])

  const {id,rating,availability,specification=[], description, price, image, name} = product || {}

  const handleAddtoCart = (id, name)=>{
    setStoredCardList(id, name)
  }
  const handleWishlist = (id, name)=>{
    setStoredWishList(id, name)
    setIsHeart(true)
  }

  return (
    <div className="bg-gray-100 pb-12">
      <div className="bg-[#9538E2] text-white text-center xs:px-5 md:px-0 pt-10 pb-44">
        <h2 className="font-bold text-4xl">Product Details</h2>
        <p className="font-semibold text-base mt-4">Explore the latest gadgets that will take your experience to the next level. <br className="hidden md:block" /> From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <div className="w-10/12 mx-auto flex gap-5 flex-col md:flex-row bg-white rounded-xl -mt-40">
        <div className="lg:w-[40%] p-6">
          <div className="bg-base-200 w-full h-full rounded-xl">
          <img src={image} alt="" 
            className="rounded-xl"/>
          </div>
        </div>
        <div className="lg:w-[60%] p-6 flex items-start justify-start flex-col gap-3">
            <h2 className="font-bold text-xl">{name}</h2>
            <p className="font-bold text-base">Price: {price}$</p>
            <p className={`btn btn-sm font-bold text-sm bg-white hover:bg-white ${availability ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>{
              `${availability ? 'In Stock' : 'Out of Stock'}`
              }</p>

              <p className="font-bold text-base mt-2">{description}</p>
              <div>
                <p className="font-bold text-lg">Specification:</p>
                  <ul>
                  {specification.map((spec, index) => (
                    <li key={index} className="font-semibold text-base ml-2">{spec}</li>
                  ))}
                </ul>
              </div>    
              <div>
              <p className="font-bold text-xl">Rating:</p>
              <p className="flex gap-4 items-center"> 
                 <Rating
                 initialRating={rating}
                 readonly
                 emptySymbol="fa fa-star-o fa-md"
                 fullSymbol={<i className="fa fa-star fa-md" style={{ color: 'goldenrod' }} />}
                 />
                 <p className="btn btn-sm font-bold text-base">{rating}</p></p>  
                 <div className="mt-5 flex items-center gap-5">
                  <button 
                  onClick={()=>handleAddtoCart(id, name)}
                  className="btn bg-[#9538E2] text-white hover:text-black font-bold text-base">Add to Card <i className="fa-solid fa-cart-shopping"></i></button>
                  <button 
                  disabled={isHeart}
                  onClick={()=>handleWishlist(id, name)}
                  className="btn font-bold text-lg rounded-full flex items-center bg-white"><i className="fa-regular fa-heart"></i></button>
                </div> 
              </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;