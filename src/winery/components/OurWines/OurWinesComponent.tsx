import React from "react";
import HomeProductsDescription from "./HomeProductsDescription";
import HomeProductsList from "./HomeProductsList";
import HomeProductItem from "./HomeProductsList/HomeProductItem";
import {Description, OurWine} from "./OurWinesContainer";

const OurWinesComponent: React.FC<{ randomWines: OurWine[], description: Description }> = ({randomWines, description}) => {

    return (
        <div className="row row-no-padding row-o-full-height row-o-columns-middle">
            <div className="wpb_column vc_column_container column-6_12">
                <HomeProductsList>
                    {
                        randomWines.map(wine => {
                            return <HomeProductItem imgUrl={wine.imgUrl || "/images/bottle.png"}
                                                    name={wine.name}
                                                    productLink={`/karta_win/${wine.id}`}
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