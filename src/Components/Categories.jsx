import { NavLink} from "react-router-dom";

const Categories = ({categories}) => {
  return (
    <div className="border-2 flex flex-col gap-4 items-center rounded-xl py-8">
      <NavLink to="/" className={({isActive}) => `font-bold text-base ${isActive ? 'bg-[#9538E2] text-white py-1 px-2 rounded-md' : 'bg-white text-black'}`}>All Products</NavLink>
      {
        categories.map(category => <NavLink 
        to={`/product/${category.category}`} 
        className={({isActive}) => `font-bold text-base ${isActive ? 'bg-[#9538E2] text-white py-1 px-2 rounded-md' : 'bg-white text-black'}`} 
        key={category.id}>  
        {category.category}</NavLink>)
      }
    </div>
  );
};

export default Categories;