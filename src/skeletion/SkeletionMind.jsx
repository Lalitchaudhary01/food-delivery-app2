import React from 'react'

const SkeletionMind = () => {
  return (
    <div className=" max-w-[1100px] mx-auto  w-full bg-white 
    shadow-lg rounded-lg overflow-hidden">
      <div className="animate-pulse">
  
        <div className="bg-gray-600 h-40 w-full"> 

        <div className="px-6 py-4">
          <div className="h-4 bg-gray-400 w-4/4 mb-2"></div>
          <div className="h-4 my-4 animate-forward bg-gray-400 w-3/4"></div>
          <div className="h-4 my-4 bg-gray-400 w-2/4"></div>
          <div className="h-4 my-2 bg-gray-400 w-1/4"></div>
        </div>

       
      </div>
      </div>
 
        
      </div>

  )
}

export default SkeletionMind;