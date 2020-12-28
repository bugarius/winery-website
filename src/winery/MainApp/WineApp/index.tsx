import React from "react";
import {WineList} from "./WineList";
import {AppWrapper} from "../../commons/components/wrappers/AppWrapper";

export const WineApp = () => {

    return (
        <AppWrapper.Default title={"Karta win"}>
            <WineList/>
        </AppWrapper.Default>
    )
};