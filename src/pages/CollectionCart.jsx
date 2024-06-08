import React from 'react'

function CollectionCart(props) {
    const {restobj} = props;
    return (
      <>
      
       
      <div className=' cursor-pointer    flex-none border-b-2 mb-3 ' >
        <div className=''>
        <img  className=' hover:drop-shadow-2xl w-[270px] h-[160px] rounded-xl ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ 
        restobj.cloudinaryImageId} alt="" />
        </div>
        <h4 className='font-semibold text-[1.2rem] mt-2'>{restobj.name}</h4>
        <h4 className='font-semibold'>⭐ {restobj.avgRating} 
        <span>{restobj.sla.deliveryTime+" mins"}</span></h4>
        <h4 className='text-slate-600 w-[300px] mb-5'>{restobj.cuisines.join(" , ")}</h4>

     </div>
  
  </>
    )
}

export default CollectionCart