import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({item}) => {
  const {id, name, price, image} = item || {}
  const navigate = useNavigate()
  return (
    <div className="card bg-base-100 border-2 p-6">
      <figure className="h-52">
        <img
          src={image}
          alt="Product"
          className="rounded-xl h-full w-full object-cover" />
      </figure>
      <div className="mt-5">
        <h2 className="card-title">{name}</h2>
        <p className='font-bold text-base'> Price: {price}$</p>
        <div className="card-actions">
          <button onClick={()=> navigate(`/item/${id}`)} className="btn font-bold text-base mt-2 bg-white border-[#9538E2] text-[#9538E2] rounded-full hover:bg-[#9538E2] hover:text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Product;