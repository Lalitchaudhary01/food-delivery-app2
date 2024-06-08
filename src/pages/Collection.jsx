import React, { useEffect, useState } from 'react'
import CollectionCart from './CollectionCart';
import { useParams } from 'react-router-dom';


function Collection() {
    
    const [collect, setcollect] = useState(null);    
    
    const { collectionId } = useParams();
    console.log(collectionId);
    
    useEffect(()=>{
        collectionApi();
    },[]) 
        
        const collectionApi = async () =>{
        const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=80383&tags=layout_CCS_CholeBhature&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
);
        const json = await data.json();
        console.log(json.data);
        setcollect(json.data);
};
    if(collect === null) { return <div>Loading</div>  }

    const {title,description}= collect.cards[0].card.card;
    const {text} = collect.cards[2].card.card.gridElements.infoWithStyle;
    const category = collect.cards.filter(
        (c) =>
         c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      ); 
        console.log(category);


  return (
    <div className=' m-7 ml-14 '>
            <h1 className='text-[2.5rem] mt-12 font-bold text-gray-800 '>{title}</h1>
            <p className='text-[1.2rem] text-gray-500 mb-4'>{description}</p>
        
            <h1 className='text-[1.7rem] font-bold text-gray-900 '>{text}</h1>
            <div className=' flex flex-wrap p-5'>
            {
                category.map((c)=> ( <CollectionCart key={c.card.card.info.id} restobj = {c.card.card.info}/> ))
            }
        </div>

</div>
  )
}

export default Collection