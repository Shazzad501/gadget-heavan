import React, { useEffect } from 'react';

const Statistic = () => {
  useEffect(()=>{
    document.title= "Statistics || Gadget Heaven"
  }, [])
  return (
    <div className='w-11/12 mx-auto'>
      <h2>hello statistic
      </h2>
    </div>
  );
};

export default Statistic;