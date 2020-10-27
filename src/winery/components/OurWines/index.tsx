import React from "react";
import OurWinesContainer from "./OurWinesContainer";
import OurWinesComponent from "./OurWinesComponent";


const OurWines = () => {

    return (
        <OurWinesContainer render={(wines, description) => (
            <OurWinesComponent randomWines={wines} description={description}/>
        )}/>
    )
};

export default OurWines;