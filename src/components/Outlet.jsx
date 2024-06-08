import React from 'react'
import { Img_link } from '../utlis/api';

function Outlet(props) {
    const {restobj} = props;
    return (
      <>
      
       
      <div className=' cursor-pointer w-[350px] h-[280px]   flex-none border-b-2 mb-3  ' >
        <div className=''>
        <img  className=' hover:drop-shadow-2xl w-[270px] h-[160px] rounded-xl ' src={Img_link+ 
        restobj.info.cloudinaryImageId} alt="" />
        </div>
        <h4 className='font-semibold text-[1.2rem] mt-2'>{restobj.info.name}</h4>
        <h4 className='font-semibold'>⭐ {restobj.info.avgRating} <span>{restobj.info.sla.deliveryTime+" mins"}</span></h4>
        <h4 className='text-slate-600 text-sm w-[270px] mb-5'>{restobj.info.cuisines.join(" , ")}</h4>

     </div>
  
  </>
    )
}

export default Outlet