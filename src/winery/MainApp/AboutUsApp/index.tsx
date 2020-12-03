import React from "react";
import {AboutUsPage} from "./AboutUsPage";
import {CommonAppWrapper} from "../../commons/components/wrappers/CommonAppWrapper";

export const AboutUsApp = () => {

    return (
        <CommonAppWrapper title={"Jak tworzymy"}>
            <AboutUsPage/>
        </CommonAppWrapper>
    )
};