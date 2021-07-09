import React from "react";
import {WineTrailPage} from "./WineTrailPage";
import {AppWrapper} from "../../commons/components/wrappers/AppWrapper";

export const WineTrailApp = () => {

    return (
        <AppWrapper.Default title={"Szlak winny"} fullWideImage={"szlakwinny-wide3.jpg"}>
            <WineTrailPage/>
        </AppWrapper.Default>
    )
};