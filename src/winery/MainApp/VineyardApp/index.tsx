import React from "react";
import {AboutVineyardPage} from "./AboutVineyardPage";
import {AppWrapper} from "../../commons/components/wrappers/AppWrapper";

export const VineyardApp = () => {

    return (
        <AppWrapper.Default title={"Nasza winnica"} fullWideImage={"winnica_bugara.jpg"}>
            <AboutVineyardPage/>
        </AppWrapper.Default>
    )
};