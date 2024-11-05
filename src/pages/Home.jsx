import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";
import { useEffect } from "react";

const Home = () => {
    const categories = useLoaderData()

    useEffect(()=>{
      document.title = "Home || Gadget Heaven";
    }, [])
  return (
    <div className="w-11/12 mx-auto">
      {/* banner */}
      <Banner></Banner>
      <Heading></Heading>
      <div className="flex flex-row gap-4 mb-10">
        <div className="w-2/12">
          <Categories categories={categories}></Categories>
        </div>
        <div className="w-10/12">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;