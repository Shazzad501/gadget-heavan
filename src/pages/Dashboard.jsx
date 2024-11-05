import { useEffect } from "react";
import { Link, Outlet} from "react-router-dom";

const Dashboard = () => {


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
          onClick={()=>handleActivity('cart')}
          to='/dashboard' 
          className="btn px-10 rounded-full text-[#9538E2] font-bold text-base hover:bg-white">Cart</Link>
          <Link 
          onClick={()=>handleActivity('wish')}
          to='/dashboard/wishlist' 
          className="btn px-7 rounded-full bg-transparent border-white text-white font-bold text-base hover:bg-transparent">Wishlist</Link>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;