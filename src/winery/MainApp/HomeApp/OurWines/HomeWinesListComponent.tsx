import React from "react";
import HomeProductsList from "../../../commons/components/home/HomeProductsList";
import HomeProductItem from "../../../commons/components/home/HomeProductsList/HomeProductItem";
import {ShopWine} from "./OurWinesContainer";

export const HomeWinesListComponent: React.FC<{ randomWines: ShopWine[] }> = ({
                                                                                                            randomWines
                                                                                                        }) => {

    return (
        <HomeProductsList>
            {
                randomWines.map(wine => {
                    return <HomeProductItem imgUrl={wine.shopImage || "/images/bottle.png"}
                                            name={wine.variety}
                                            productLink={`/wina/karta_win/${wine.id}`}
                                            addToCardLink={""}
                                            key={wine.id}
                                            badge={wine.badge}
                                            price={wine.price}
                                            alt={wine.alt}
                                            year={wine.year}
                    />
                })
            }
        </HomeProductsList>
    )
};