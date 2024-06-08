import React, { useState, useEffect } from 'react';
import Mind from './Mind';
import SkeletionMind from '../skeletion/SkeletionMind';
import { Api_link } from '../utlis/api';

function Minds() {
  const [carousel, setCarousel] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(Api_link);
    const json = await data.json();
    setCarousel(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
  };

  const handleClick = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex - 6 < 0 ? carousel.length - Math.abs(prevIndex - 6) : prevIndex - 6));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 6 >= carousel.length ? prevIndex + 6 - carousel.length : prevIndex + 6));
    }
  };

  if (carousel.length === 0) {
    return <SkeletionMind />;
  }

  return (
    <>
      <div className="   xl:w-[1100px]  mx-auto relative">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-300 focus:bg-orange-500 active:bg-gray-500 rounded-full w-8 h-8" onClick={() => handleClick('left')}>
          {'<'}
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-300 focus:bg-orange-500 active:bg-gray-500 rounded-full w-8 h-8" onClick={() => handleClick('right')}>
          {'>'}
        </button>
        <div className="flex overflow-x-hidden">
          {carousel.map((res, index) => (
            <div key={res.id} style={{ display: index >= currentIndex && index < currentIndex + 6 ? 'block' : 'none' }}>
              <Mind restobj={res} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Minds;
