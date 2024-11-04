const Banner = () => {
  return (
    <div>
      <div className="bg-[#9538E2] flex flex-col gap-4 items-center text-center py-5 rounded-b-xl pb-52 px-5 md:px-0">
      <h2 className="font-bold text-5xl text-white">Upgrade Your Tech Accessorize with <br className="hidden md:block" /> Gadget Heaven Accessories</h2>
      <p className="font-semibold text-base text-white">Explore the latest gadgets that will take your experience to <br className="hidden md:block" /> the next level. From smart devices to the coolest accessories, we have it all!</p>
      <button className=" btn rounded-full  bg-white font-bold text-sm text-[#9538E2]  hover:bg-white">Shop Now</button>
    </div>
    <div className="p-3 border-2 border-white  backdrop-blur-sm rounded-xl mx-auto w-10/12 md:w-9/12 h-[450px] -mt-44">
      <div className="w-full h-full">
        <img 
        className="w-full h-full rounded-xl"
        src='https://i.ibb.co.com/tcGWmWw/banner.jpg' 
        alt="" />
      </div>
    </div>
    </div>
  );
};

export default Banner;