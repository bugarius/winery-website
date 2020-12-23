import React from "react";
import {BundlesContainer} from "./BundlesContainer";
import {useScrollContext} from "../ScrollContext";
import {HomeRowComponent} from "../../../commons/components/home/row/HomeRowComponent";
import {HomeBundlesListComponent} from "./HomeBundlesListComponent";
import {HomeBundlesDescriptionComponent} from "./HomeBundlesDescriptionComponent";


export const Bundles = () => {
    const {refs} = useScrollContext();

    return (
        <BundlesContainer render={(bundles, description) => (
            <HomeRowComponent refTarget={refs.gift}
                              rightComponent={<HomeBundlesListComponent bundles={bundles}/>}
                              leftComponent={<HomeBundlesDescriptionComponent description={description}/>}
            />
        )}/>
    )
};
