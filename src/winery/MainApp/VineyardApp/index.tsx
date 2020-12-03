import React from "react";
import {AboutVineyardPage} from "./AboutVineyardPage";
import {CommonAppWrapper} from "../../commons/components/wrappers/CommonAppWrapper";

export const VineyardApp = () => {

    return (
        <CommonAppWrapper title={"Nasza winnica"} fullWideImage={"winnica_bugara.jpg"}>
            <AboutVineyardPage/>
        </CommonAppWrapper>
    )
};