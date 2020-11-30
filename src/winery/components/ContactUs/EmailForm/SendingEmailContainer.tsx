import React, {ChangeEvent, FC, useCallback, useReducer} from "react";
import {useEmailService} from "./useEmailService";
import {EmailState} from "./EmailFormPresentation";

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

interface Props
{
    render: (
        handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
        handleSubmit: (event: React.MouseEvent<HTMLElement>) => void,
        state: EmailState
    ) => JSX.Element;
}

export const SendingEmailContainer: FC<Props> = ({render}) => {

    const [state, dispatch] = useReducer(reducer, defaultState);

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
        const isFormValid = () => {
            return ![state.name, state.email, state.message].some(text => !text?.length)
        }
        dispatch({type: "triggerSend", value: true});
        if (isFormValid())
        {
            sendEmail()
                .then(handleSendEmail)
                .catch(handleError)
        }
    }, [sendEmail, state]);

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

    return render(handleChange, handleSubmit, state)

};
