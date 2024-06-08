import React from 'react';

const SkeletonCard = () => {
  return (
    <div className=' max-w-[1100px] mx-auto  w-full  
    shadow-lg rounded-lg overflow-hidden'>
        <div className='flex flex-wrap justify-between animate-pulse'>
        <div className='w-[280px] h-[280px] bg-gray-200 rounded-lg'>
              <div className='w-[250px] h-[150px] bg-slate-300 m-2 rounded-2xl '></div>
              <div className=' m-3  h-4  bg-slate-300 w-20 rounded-lg'></div>
              <div className=' m-3  h-4  bg-slate-300 w-56 rounded-lg'></div>
        </div>
        <div className='w-[280px] h-[280px] bg-gray-200 rounded-lg'>
              <div className='w-[250px] h-[150px] bg-slate-300 m-2 rounded-2xl '></div>
              <div className=' m-3  h-4  bg-slate-300 w-20 rounded-lg'></div>
              <div className=' m-3  h-4  bg-slate-300 w-56 rounded-lg'></div>
        </div>
        <div className='w-[280px] h-[280px] bg-gray-200 rounded-lg'>
              <div className='w-[250px] h-[150px] bg-slate-300 m-2 rounded-2xl '></div>
              <div className=' m-3  h-4  bg-slate-300 w-20 rounded-lg'></div>
              <div className=' m-3  h-4  bg-slate-300 w-56 rounded-lg'></div>
        </div>
        

        </div>
    </div>
    
   
  );
};

export default SkeletonCard;
