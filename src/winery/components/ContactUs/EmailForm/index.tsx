import React, {ChangeEvent, FC, useReducer} from "react";
import {useTranslation} from "react-i18next";
import {InputElement} from "../../forms/InputElement";

interface EmailState
{
    name: string;
    email: string;
    message: string;
    triggerSend: boolean;
}

const reducer = (state: EmailState, action: { type: string, value: string | boolean }) => {
    return {...state, [action.type]: action.value};
};

const defaultState = {
    name: "",
    email: "",
    message: "",
    triggerSend: false
};

export const EmailForm: FC<any> = () => {

    const {t} = useTranslation();

    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({type: event.target.name, value: event.target.value});
    };

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        if (isFormInvalid())
        {
            e.preventDefault();
        }
        dispatch({type: "triggerSend", value: true});
    };

    const isFormInvalid = () => {
        return [state.name, state.email, state.message].some(text => !text?.length)
    }

    return (
        <div className="row">
            <div className="wpb_column vc_column_container column-12_12">
                <div className="vc_column-inner ">
                    <div className="content">
                        <div className="sc_form sc_form_default sc_align_center">
                            <form className="sc_form_form sc_input_hover_underline inited">
                                <div className="sc_form_details trx_addons_columns_wrap">
                                    <div className="trx_addons_column-1_2">
                                        <InputElement type={"text"}
                                                      name="name"
                                                      label={t('COMMON_WORDS.NAME')}
                                                      onChange={handleChange}
                                                      value={state.name}
                                                      maxLength={20}
                                                      showError={!state.name && state.triggerSend}
                                                      required
                                        />
                                    </div>
                                    <div className="trx_addons_column-1_2">
                                        <InputElement type={"email"}
                                                      name="email"
                                                      label={t('COMMON_WORDS.EMAIL')}
                                                      onChange={handleChange}
                                                      value={state.email}
                                                      maxLength={20}
                                                      showError={!state.email && state.triggerSend}
                                                      required
                                        />
                                    </div>
                                </div>
                                <InputElement type={"textarea"}
                                              name="message"
                                              label={t('COMMON_WORDS.MESSAGE')}
                                              onChange={handleChange}
                                              value={state.message}
                                              maxLength={1000}
                                              showError={!state.message && state.triggerSend}
                                              required
                                />
                                <div className="sc_form_field sc_form_field_button">
                                    <button onClick={handleSubmit} className="sc_button_hover_slide_top">{t('BUTTON.TEXT.SEND')}</button>
                                </div>
                                <div className="trx_addons_message_box sc_form_result"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
