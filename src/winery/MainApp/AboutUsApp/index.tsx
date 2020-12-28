import React from "react";
import {AboutUsPage} from "./AboutUsPage";
import {AppWrapper} from "../../commons/components/wrappers/AppWrapper";

export const AboutUsApp = () => {

    return (
        <AppWrapper.Default title={"Jak tworzymy"}>
            <AboutUsPage/>
        </AppWrapper.Default>
    )
};