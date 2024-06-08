
import React from 'react';
import Popular from './Popular';
import { useState, useEffect } from 'react';
import { Api_link } from '../utlis/api';
import { Link } from 'react-router-dom';
import SkeletonCard from '../skeletion/SkeletonCard';

function Populars() {
    const [carosel, setcarosel] = useState([]);
    const [fast, setfast] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchapi();
    }, []);

    const fetchapi = async () => {
        const data = await fetch(Api_link);
        const json = await data.json();

        setcarosel(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfast(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    if (fast.length === 0) {
        return <SkeletonCard />;
    }

    return (
        <>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 font-medium'>Restaurants with online food delivery in Delhi</h1>

            <div className="flex flex-col md:flex-row items-center  md:items-start md:gap-3 justify-center md:justify-cemter mb-4">
                <p className='button mb-2 md:mb-0 bg-gray-200 px-4 py-2 rounded-full text-sm md:text-base cursor-pointer hover:bg-gray-300'
                    onClick={() => {
                        const faster = fast.filter((res) => res.info.sla.deliveryTime < 22);
                        setcarosel(faster);
                    }}>
                    Fast Delivery
                </p>

                <p className='button mb-2 md:mb-0 bg-gray-200 px-4 py-2 rounded-full text-sm md:text-base cursor-pointer hover:bg-gray-300'
                    onClick={() => {
                        const higherRated = fast.filter((res) => res.info.avgRating > 4.1);
                        setcarosel(higherRated);
                    }}>
                    Rating 4.0+
                </p>

                <div className="flex items-center">
                    <input className='input rounded-lg border-2 border-black-500 outline-none px-3 py-1 mr-2'
                        placeholder='Search With me'
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className='button bg-gray-200 rounded-lg px-4 py-2 text-sm md:text-base hover:bg-gray-300'
                        onClick={() => {
                            const filters = fast.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setcarosel(filters);
                        }}>
                        Search
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {carosel.map((res) => (
                    <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                        <Popular restobj={res} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Populars;
