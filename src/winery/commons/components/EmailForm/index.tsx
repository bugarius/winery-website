import React from "react";
import {EmailFormPresentation} from "./EmailFormPresentation";
import {SendingEmailContainer} from "./SendingEmailContainer";
import {Loader} from "../Loader/loader";

export const EmailForm = () => {
    return (
        <SendingEmailContainer render={(onChange, onSubmit, state, loading) => (
            <Loader loading={loading}><EmailFormPresentation onChange={onChange} state={state} onSubmit={onSubmit}/></Loader>
        )}/>
    )
};
