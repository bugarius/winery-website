import React from "react";
import {AppWrapper} from "../../commons/components/wrappers/AppWrapper";
import {WineTastingAppPage} from "./WineTastingPage";

export const WineTastingApp = () => {

    return (
        <AppWrapper.Default title={"Degustacja i zwiedzanie"} fullWideImage={"image-17-1024x738.jpg"}>
            <WineTastingAppPage/>
        </AppWrapper.Default>
    )
};