import React, {ChangeEvent, useReducer} from "react";
import {useEmailService} from "./useEmailService";
import {EmailFormProps, EmailState} from "./EmailFormPresentation";

const reducer = (state: EmailState, action: { type: string, value?: any }) => {
    if (action.type === "submitMessage")
    {
        return {...defaultState, submitMessage: action.value};
    }
    return {...state, [action.type]: action.value};
};

const defaultState = {
    name: "",
    email: "",
    message: "",
    triggerSend: false,
    submitMessage: {
        isValid: true,
        message: ""
    }
};

export const withSendingEmailHOC = <T extends EmailFormProps>(WrappedComponent: React.ComponentType<T>) => (ownProps: Omit<T, keyof EmailFormProps>) => {

    const [state, dispatch] = useReducer(reducer, defaultState);

    const {sendEmail} = useEmailService({
        name: state.name,
        message: state.message,
        email: state.email
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({type: event.target.name, value: event.target.value});
    };

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch({type: "triggerSend", value: true});
        if (isFormValid())
        {
            sendEmail()
                .then(handleSendEmail)
                .catch(handleError)
        }
    };

    const handleSendEmail = () => {
        dispatch({type: "triggerSend", value: false});
        dispatch({type: "submitMessage", value: {isValid: true, message: "Wiadomość wysłana!"}});
    }

    const handleError = () => {
        dispatch({
            type: "submitMessage",
            value: {
                isValid: false,
                message: "Błąd wysyłania wiadomości! Spróbuj ponownie, lub skontaktuj się na facebook'u"
            }
        });
    }

    const isFormValid = () => {
        return ![state.name, state.email, state.message].some(text => !text?.length)
    }

    const props = {
        onChange: handleChange,
        onSubmit: handleSubmit,
        state,
        ...ownProps
    }

    return <WrappedComponent {...props as T} />

};
