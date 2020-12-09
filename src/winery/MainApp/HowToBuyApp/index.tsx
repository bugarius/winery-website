import React from "react";
import {HowToBuyWinePage} from "./HowToByWinePage";
import {CommonAppWrapper} from "../../commons/components/wrappers/CommonAppWrapper";

export const HowToBuyApp = () => {

    return (
        <CommonAppWrapper title={"Sprzedaż"} fullWideImage={"shop-winnica-bugara.jpg"}>
            <HowToBuyWinePage/>
        </CommonAppWrapper>
    )
};