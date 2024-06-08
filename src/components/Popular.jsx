import React from 'react'
import { Img_link } from '../utlis/api';

function Popular(props) {
    const {restobj} = props;
    return (
      <>
      
       
      <div className=' cursor-pointer w-[250px] h-[300px]  border-b-2 mb-3 hover:bg-slate-100 hover:shadow-lg ' >
        <div className=' bg-slate-300 w-[250px] h-[160px] rounded-xl'>
        <img  className=' w-[250px] h-[160px] rounded-xl ' src={Img_link+ 
        restobj.info.cloudinaryImageId} alt="" />
        </div>
        <h4 className='font-semibold text-[1.2rem] mt-2'>{restobj.info.name}</h4>
        <h4 className='font-semibold  '>⭐ {restobj.info.avgRating} <span>{restobj.info.sla.deliveryTime+" mins"}</span></h4>
        <h4 className='text-slate-600 w-[250px]'>{restobj.info.cuisines.join(" , ")}</h4>

     </div>
  
  </>
  )
}

export default Popular