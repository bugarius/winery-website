import React from "react";
import {EmailFormPresentation} from "./EmailFormPresentation";
import {SendingEmailContainer} from "./SendingEmailContainer";

export const EmailForm = () => {
    return (
        <SendingEmailContainer render={(onChange, onSubmit, state) => (
            <EmailFormPresentation onChange={onChange} state={state} onSubmit={onSubmit}/>
        )}/>
    )
};
