import React, {FC} from "react";

import {Bundle} from "../../../model/Bundle";
import HomeProductsList from "../../../commons/components/home/HomeProductsList";
import HomeProductItem from "../../../commons/components/home/HomeProductsList/HomeProductItem";

export const HomeBundlesListComponent: FC<{ bundles: Bundle[] }> = ({bundles}) => {
    return (
        <HomeProductsList>
            {
                bundles.map(bundle => {
                    return <HomeProductItem imgUrl={bundle.image}
                                            name={bundle.name}
                                            productLink={bundle.productLink}
                                            addToCardLink={""}
                                            key={bundle.id}
                                            price={bundle.price}
                                            alt={bundle.alt}
                                            year={bundle.years}
                    />
                })
            }
        </HomeProductsList>
    )
};