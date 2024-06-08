import React from 'react'

function Leftright(props) {


  

const sliderbutton = () =>{
  console.log("button clicked");
}

  return (
    <div className=' px-3 w-full flex justify-between lg:w-[1100px] mt-1 mx-auto '>
    <div className="  w-full flex justify-between  sm:justify-between items-center">
    <div><h1 className=' sm:text-[1.5rem] font-medium '>{props.title}</h1></div>
    {/* <div className="leftRight flex gap-2">
        <div  className="left cursor-pointer w-5 h-5 sm:h-8 sm:w-8 py-2  rounded-full bg-slate-100 flex  justify-center items-center">
        <img className=' sm:w-5 w-3' src="https://cdn.iconscout.com/icon/free/png-256/free-left-arrow-437-1174845.png" alt="" />
       </div>
        <div onClick={()=>{sliderbutton()}} className="right cursor-pointer w-5 h-5 sm:h-8 sm:w-8 py-2  rounded-full bg-slate-100 flex  justify-center items-center rotate-180 ">
            <img className='sm:w-5 w-3   ' src="https://cdn.iconscout.com/icon/free/png-256/free-left-arrow-437-1174845.png" alt="" /> </div>    
     </div>
 */}
</div>
  </div>   

  )
}

export default Leftright