import React from "react";
import {HowToBuyWinePage} from "./HowToByWinePage";
import {AppWrapper} from "../../commons/components/wrappers/AppWrapper";

export const HowToBuyApp = () => {

    return (
        <AppWrapper.Default title={"Sprzedaż"} fullWideImage={"shop-winnica-bugara.jpg"}>
            <HowToBuyWinePage/>
        </AppWrapper.Default>
    )
};