import React from 'react'
import { Img_link } from '../utlis/api';
import { useDispatch } from 'react-redux';
import { addItem } from '../utlis/cartSlice';

function RestaurantList({item}) {

  const dispatch = useDispatch();

  const handleAddItem = (i) => {
    dispatch(addItem(i));

  };


  return (
    <div >
        {item.map((i) => (
            <div className=' flex justify-between items-center  border-b-2 pt-3 ' key={i.card.info.id}>
                <div className='w-full'>
                    <p className='font-semibold'>{i.card.info.name}</p>
                    
                    <span className=''>₹
                    {i.card.info.price
                      ? i.card.info.price/100 
                      : i.card.info.defaultPrice/100
                    }</span>
                  </div>
                  <div className=' w-[140px] '>
                    <div className=' relative'>
                    <img className=' mb-5 rounded-full w-28 h-28 ' src={ Img_link+ i.card.info.imageId} alt="" />
                    <button className=" absolute bottom-2 hover:bg-orange-700 hover:text-white  rounded-lg text-center ml-6 bg-orange-500 px-3  "
                            onClick={()=>handleAddItem(i)}>Add +</button>
                    </div>
                </div>
            </div>
))}
   
</div>
  );
};

export default RestaurantList