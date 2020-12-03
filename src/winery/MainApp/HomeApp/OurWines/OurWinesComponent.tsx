import React from "react";
import HomeProductsDescription from "./HomeProductsDescription";
import HomeProductsList from "./HomeProductsList";
import HomeProductItem from "./HomeProductsList/HomeProductItem";
import {Description, OurWine} from "./OurWinesContainer";
import {useScrollContext} from "../ScrollContext";

const OurWinesComponent: React.FC<{ randomWines: OurWine[], description: Description }> = ({randomWines, description}) => {

    const {refs} = useScrollContext();

    return (
        <div ref={refs.wines} className={"row row-no-padding row-o-columns-middle" + (window.innerWidth > 768 && window.innerWidth < 1024 ? "" : " row-o-full-height")}>
            <div className="wpb_column vc_column_container column-6_12">
                <HomeProductsList>
                    {
                        randomWines.map(wine => {
                            return <HomeProductItem imgUrl={wine.imgUrl || "/images/bottle.png"}
                                                    name={wine.name}
                                                    productLink={`/wina/karta_win/${wine.id}`}
                                                    addToCardLink={""}
                                                    key={wine.id}
                                                    badge={wine.badge}
                            />
                        })
                    }
                </HomeProductsList>
            </div>
            <div className="wpb_column vc_column_container column-6_12">
                <HomeProductsDescription title={description.title}
                                         subtitle={description.subtitle}
                                         text={description.text}
                />
            </div>
        </div>
    )
};

export default OurWinesComponent;