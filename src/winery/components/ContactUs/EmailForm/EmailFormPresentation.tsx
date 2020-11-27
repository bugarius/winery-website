import React, {ChangeEvent, FC} from "react";
import {useTranslation} from "react-i18next";
import {InputElement} from "../../forms/InputElement";

export interface EmailState
{
    name: string;
    email: string;
    message: string;
    triggerSend: boolean;
    submitMessage: { isValid: boolean, message: string }
}

export interface EmailFormProps
{
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    state: EmailState;
    onSubmit: () => void;
}

export const EmailFormPresentation: FC<EmailFormProps> = ({onChange, state, onSubmit}) => {

    const {t} = useTranslation();

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
                                                      onChange={onChange}
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
                                                      onChange={onChange}
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
                                              onChange={onChange}
                                              value={state.message}
                                              maxLength={1000}
                                              showError={!state.message && state.triggerSend}
                                              required
                                />
                                <div className="sc_form_field sc_form_field_button">
                                    <button onClick={onSubmit}
                                            className="sc_button_hover_slide_top">{t('BUTTON.TEXT.SEND')}</button>
                                    {state.submitMessage.message &&
                                    <div style={{
                                        paddingTop: "10px",
                                        color: (state.submitMessage.isValid ? "orange" : "red")
                                    }}>
                                        {state.submitMessage.message}
                                    </div>
                                    }
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
