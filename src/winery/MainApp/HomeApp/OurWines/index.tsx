import React from "react";
import OurWinesContainer from "./OurWinesContainer";
import {HomeRowComponent} from "../../../commons/components/home/row/HomeRowComponent";
import {useScrollContext} from "../ScrollContext";
import {HomeWinesListComponent} from "./HomeWinesListComponent";
import {HomeWinesDescriptionComponent} from "./HomeWinesDescriptionComponent";


const OurWines = () => {

    const {refs} = useScrollContext();

    return (
        <OurWinesContainer render={(wines, description) => (
            <HomeRowComponent refTarget={refs.gift}
                              rightComponent={<HomeWinesDescriptionComponent description={description}/>}
                              leftComponent={<HomeWinesListComponent randomWines={wines}/>}
            />
        )}/>
    )
};

export default OurWines;