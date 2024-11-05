import { useEffect } from "react";
import { Link, Outlet, useLocation} from "react-router-dom";

const Dashboard = () => {

   const location= useLocation()

  useEffect(()=>{
    document.title = "Dashboard || Gadget Heaven"
  }, [])

  return (
    <div>
      <div className="bg-[#9538E2] flex gap-3 flex-col items-center text-center py-10">
        <h2 className="font-bold text-4xl text-white">Dashboard</h2>
        <p className="font-bold text-base text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="hidden md:block" /> the coolest accessories, we have it all!</p>
        <div className="flex gap-5 mt-5">
          <Link  
           className={`btn px-10 rounded-full font-bold text-base 
            ${location.pathname==='/dashboard' ? 'text-[#9538E2] bg-white hover:bg-white' :'bg-transparent text-white hover:bg-transparent border-white'}`}
          to='/dashboard'>
            Cart</Link>
          <Link 
          className={`btn px-7 rounded-full font-bold text-base 
            ${location.pathname=== '/dashboard/wishlist' ? 'text-[#9538E2] bg-white hover:bg-white' :'bg-transparent text-white hover:bg-transparent border-white'}`}
          to='/dashboard/wishlist'>Wishlist</Link>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;