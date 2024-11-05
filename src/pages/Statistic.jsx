import React, { useEffect } from 'react';

const Statistic = () => {
  useEffect(()=>{
    document.title= "Statistics || Gadget Heaven"
  }, [])
  return (
    <div className=''>
      <div className='bg-[#9538E2] text-center flex flex-col gap-3 py-10 text-white'>
        <h2 className='font-bold text-3xl'>Statistics</h2>
        <p className='font-bold text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className='hidden md:block' /> the coolest accessories, we have it all!</p>
      </div>
    </div>
  );
};

export default Statistic;