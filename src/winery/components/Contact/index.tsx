import React from "react";
import DotComponent from "../VineyardTopComponent/DotComponent";
import {FileUtils} from "../shared/Utils";

const Contact = () => {
    return (
        <div className="row vc_custom_1466154433105 row-o-full-height row-o-columns-stretch row-o-equal-height">
            <div className="wpb_column vc_column_container column-4_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper"/>
                </div>
            </div>
            <div className="wpb_column vc_column_container column-4_12 vc_col-has-fill">
                <div className="vc_column-inner vc_custom_1466756857898">
                    <div className="wpb_wrapper">
                        <i id="sc_anchor_address" className="sc_anchor" title="Our Address"/>
                        <div className="vc_empty_space  height_medium" style={{height: '0px'}}/>
                        <div
                            className="sc_promo sc_promo_default sc_promo_size_normal sc_promo_no_paddings sc_promo_no_image">
                            <div className="sc_promo_text sc_float_center" style={{width: '100%'}}>
                                <div className="sc_promo_text_inner sc_align_center">
                                    <div className="sc_promo_icon"><span
                                        className="icon-address"/></div>
                                    <h2 className="sc_item_title sc_promo_title">Kontakt</h2>
                                    <h5 className="sc_item_subtitle sc_promo_subtitle">Masz pytania? Zapraszamy do kontaktu...</h5>
                                    <div className="sc_promo_content sc_item_content">
                                        <div className="wpb_text_column wpb_content_element ">
                                            <div className="wpb_wrapper">
                                                <p><em><strong>Adres:</strong></em><br/> ul. Ludowa 79, 42-215 Częstochowa</p>
                                                <p><em><strong>Telefon:</strong></em><br/> +48 608 099 024<br/> +48 608 469 814<br/> +48 602 267 889</p>
                                                <p><em><strong>E-mail:</strong></em><br/> mariusz.bugara@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc_item_button sc_promo_button sc_button_wrap">
                                        <a href="https://www.facebook.com/winnicabugara" rel="noopener noreferrer" target="_blank"                                                                                                      className="sc_button sc_button_simple sc_button_size_normal sc_button_icon_top"><span
                                        className="sc_button_icon"><span className="icon-down-big"/></span><span
                                        className="sc_button_text"><span className="sc_button_title">Zapytaj na Facebook'u</span></span>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                        <div className="vc_empty_space  height_medium" style={{height: '0px'}}/>
                    </div>
                </div>
            </div>
            <div className="wpb_column vc_column_container column-4_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                        <div className="cqtooltip-wrapper "><img src={FileUtils.getImage("spacer.png")} alt=""/>
                            <div className="cq-hotspots">
                                <DotComponent position={{top: 44, left: 25}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;