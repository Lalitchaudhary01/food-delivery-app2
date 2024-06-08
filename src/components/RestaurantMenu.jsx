import React, { useEffect } from "react";
import { Menu_link } from "../utlis/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import SkeletonCard from "../skeletion/SkeletonCard";

function RestaurantMenu() {
  const [restMenu, setrestMenu] = useState(null);

  const [showIndex, setShowIndex] = useState(0);

  const { resid } = useParams();

  useEffect(() => {
    fatchApi();
  }, []);

  const fatchApi = async () => {
    const data = await fetch(Menu_link + resid);
    const json = await data.json();
    setrestMenu(json.data);
  };
  if (restMenu === null) {
    return <SkeletonCard />;
  }

  const { name, cuisines, costForTwoMessage } =
    restMenu?.cards[2]?.card?.card.info;
  const category =
    restMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="  ">
        <div className="text-center text-[1.3rem]">
          <p className=" text-center text-[2rem] ">{name}</p>
          <span className="  ">{cuisines}</span>
          <span className=" text-center text-[1.3rem] ">
            {costForTwoMessage}
          </span>
        </div>
        {category.map((c, index) => (
          <RestaurantCategory
            key={c.card.card.title}
            data={c?.card?.card}
            showitem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
}

export default RestaurantMenu;
