import React from 'react'
import RestaurantList from './RestaurantList';
import { useState } from 'react';

function RestaurantCategory({data , showitem, setShowIndex}) {

 
const handdleClicked = () =>{
  setShowIndex();
}

  return (
    <div className=' 3/12  md:w-6/12 mx-auto my-4  shadow-lg p-3'>
        <div className='flex justify-between cursor-pointer' onClick={handdleClicked}>
             <span className='text-[1.2rem] font-semibold'>{data.title} ({data.itemCards.length})</span>
             <span>🡳</span>        
        </div>
    
        { showitem && <RestaurantList  item = {data.itemCards}/>}          
        
</div>    

  )
}

export default RestaurantCategory