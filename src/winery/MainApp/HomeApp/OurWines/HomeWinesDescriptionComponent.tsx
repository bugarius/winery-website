import React from "react";
import HomeProductsDescription from "./HomeProductsDescription";
import {Description} from "./OurWinesContainer";

export const HomeWinesDescriptionComponent: React.FC<{ description: Description }> = ({description}) => {

    return (
        <HomeProductsDescription title={description.title}
                                 subtitle={description.subtitle}
                                 text={description.text}
        />
    )
};