import React, {FC} from "react";
import {GoogleMapContact} from "./GoogleMapContact";
import {RowContent} from "../RowContent";
import {CommonWrapper} from "../wrappers/CommonWrapper";

export const ContactUs: FC<any> = () => {

    return (
        <div className="page_content_wrap scheme_default">
            <GoogleMapContact/>

            <CommonWrapper>
                <RowContent icon={"icon-winery"}
                            title={"Skontaktuj się"}
                            subtitle={"Jeśli masz pytania odnoście naszych win, degustacji, zwiedzania, zakupów zapraszamy do kontaktu"}
                />
                <div className="row">
                    <div className="wpb_column vc_column_container column-12_12">
                        <div className="vc_column-inner ">
                            <div className="content">
                                <div className="sc_form sc_form_default sc_align_center">
                                    <form className="sc_form_form sc_input_hover_underline inited">
                                        <div className="sc_form_details trx_addons_columns_wrap">
                                            <div className="trx_addons_column-1_2"><label
                                                className="sc_form_field sc_form_field_name required">
                                                <span className="sc_form_field_wrap"><input type="text" name="name"
                                                                                            aria-required="true"/><span
                                                    className="sc_form_field_hover"><span
                                                    className="sc_form_field_content"
                                                    data-content="Name">Imię</span></span></span></label>
                                            </div>
                                            <div className="trx_addons_column-1_2"><label
                                                className="sc_form_field sc_form_field_email required">
                                                <span className="sc_form_field_wrap"><input type="text" name="email"
                                                                                            aria-required="true"/><span
                                                    className="sc_form_field_hover"><span
                                                    className="sc_form_field_content"
                                                    data-content="E-mail">E-mail</span></span></span></label>
                                            </div>
                                        </div>
                                        <label className="sc_form_field sc_form_field_message required"><span
                                            className="sc_form_field_wrap"><textarea name="message" aria-required="true"
                                                                                     defaultValue={""}/><span
                                            className="sc_form_field_hover"><span className="sc_form_field_content"
                                                                                  data-content="Message">Wiadomość</span></span>	</span></label>
                                        <div className="sc_form_field sc_form_field_button">
                                            <button className="sc_button_hover_slide_top">Wyślij wiadomość</button>
                                        </div>
                                        <div className="trx_addons_message_box sc_form_result"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </div>
    );
};
