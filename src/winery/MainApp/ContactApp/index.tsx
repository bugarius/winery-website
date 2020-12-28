import React from "react";
import {ContactPage} from "./ContactPage";
import {AppWrapper} from "../../commons/components/wrappers/AppWrapper";

export const ContactApp = () => {

    return (
        <AppWrapper.Default title={"Kontakt"}>
            <ContactPage/>
        </AppWrapper.Default>
    )
};