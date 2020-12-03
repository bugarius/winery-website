import React from "react";
import {ContactPage} from "./ContactPage";
import {CommonAppWrapper} from "../../commons/components/wrappers/CommonAppWrapper";

export const ContactApp = () => {

    return (
        <CommonAppWrapper title={"Kontakt"}>
            <ContactPage/>
        </CommonAppWrapper>
    )
};