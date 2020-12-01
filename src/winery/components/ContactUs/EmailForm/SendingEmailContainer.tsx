import React, {ChangeEvent, FC, useCallback, useReducer, useState} from "react";
import {useEmailService} from "./useEmailService";
import {EmailState} from "./EmailFormPresentation";
import {FormValidator} from "../../forms/validators/FormValidator";

const reducer = (state: EmailState, action: { type: string, value?: any }) => {
    switch (action.type)
    {
        case "reset":
            return {...defaultState, submitMessage: state.submitMessage};
        case "resetSubmitMessage":
            return {...state, submitMessage: defaultState.submitMessage};
        default:
            return {...state, [action.type]: action.value};

    }
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

interface Props
{
    render: (
        handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
        handleSubmit: (event: React.MouseEvent<HTMLElement>) => void,
        state: EmailState,
        loading: boolean
    ) => JSX.Element;
}

export const SendingEmailContainer: FC<Props> = ({render}) => {

    const [state, dispatch] = useReducer(reducer, defaultState);
    const [loading, setLoading] = useState(false);

    const {sendEmail} = useEmailService({
        name: state.name,
        message: state.message,
        email: state.email
    })

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({type: event.target.name, value: event.target.value});
    }, []);

    const handleSubmit = useCallback((e: React.MouseEvent<HTMLElement>) => {

        e.preventDefault();
        const isFormValid = FormValidator.notAllBlank([state.name, state.email, state.message]) && FormValidator.isEmailValid(state.email);
        dispatch({type: "triggerSend", value: true});
        dispatch({type: "resetSubmitMessage"});
        if (isFormValid)
        {
            setLoading(true);
            sendEmail()
                .then(handleSendEmail)
                .catch(handleError)
        }
        else
        {
            dispatch({type: "submitMessage", value: {isValid: false, message: "Wprowadzono niepoprawne dane!"}});
        }
    }, [sendEmail, state]);

    const handleSendEmail = () => {
        dispatch({type: "triggerSend", value: false});
        dispatch({type: "submitMessage", value: {isValid: true, message: "Wiadomość wysłana!"}});
        dispatch({type: "reset"});
        setLoading(false);
    }

    const handleError = () => {
        dispatch({type: "triggerSend", value: false});
        dispatch({
            type: "submitMessage",
            value: {
                isValid: false,
                message: "Błąd wysyłania wiadomości! Spróbuj ponownie, lub skontaktuj się na facebook'u"
            }
        });
        setLoading(false);
    }

    return render(handleChange, handleSubmit, state, loading)

};
