import React from "react";
import {WineList} from "./WineList";
import {CommonAppWrapper} from "../../commons/components/wrappers/CommonAppWrapper";

export const WineApp = () => {

    return (
        <CommonAppWrapper title={"Karta win"}>
            <WineList/>
        </CommonAppWrapper>
    )
};