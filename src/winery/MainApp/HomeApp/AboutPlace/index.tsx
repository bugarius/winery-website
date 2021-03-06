import React from "react";
import {FileUtils} from "../../../commons/shared/Utils";
import {NavLink} from "react-router-dom";
import {useScrollContext} from "../ScrollContext";

const AboutPlace = () => {

    const {refs} = useScrollContext();

    return (
        <div ref={refs.aboutPlace}
            className={"row row-no-padding vc_custom_1466087475749 row-o-columns-stretch row-o-equal-height" + (window.innerWidth > 768 && window.innerWidth < 1024 ? "" : " row-o-full-height")}>
            <div className="wpb_column vc_column_container column-12_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                        <div className="sc_promo sc_promo_default sc_promo_size_large">
                            <div className="sc_promo_image"
                                 style={{backgroundImage: `url(${FileUtils.getImage("image-21.jpg")})`, width: '50%', left: 0}}/>
                            <div className="sc_promo_text trx_addons_stretch_height"
                                 style={{width: '50%', float: 'right'}}>
                                <div className="sc_promo_text_inner sc_align_center">
                                    <div className="sc_promo_icon" data-icon="icon-grape-3"><span
                                        className="icon-grape-3"/></div>
                                    <h2 className="sc_item_title sc_promo_title">Winnica</h2>
                                    <h5 className="sc_item_subtitle sc_promo_subtitle">Winnica położona jest na peryferiach Częstochowy, tuż przy północnym krańcu <strong>Jury Krakowsko-Częstochowskiej</strong>. </h5>
                                    <div className="sc_item_descr sc_promo_descr">Początki winnicy sięgają <strong>2008</strong> roku, kiedy to posadziliśmy pierwsze sadzonki <strong>Rieslinga</strong>. W kolejnych latach sukcesywnie powiększaliśmy nasz areał o inne odmiany winorośli, takie jak <strong>Solaris, Regent czy Cabernet Cortis</strong>, a ostatnio również o <strong>Hibernal, Pinot Gris oraz Chardonnay</strong>.
                                    </div>
                                    <div className="sc_item_descr sc_promo_descr">Aktualnie nasza winnica zajmuje powierzchnię <strong>2 ha</strong>.
                                    </div>
                                    <div className="sc_item_button sc_promo_button sc_button_wrap">
                                        <NavLink
                                            className="sc_button sc_button_simple sc_button_size_normal sc_button_icon_top" to={"/winnica"}><span
                                            className="sc_button_icon"><span className="icon-down-big"/></span><span
                                            className="sc_button_text"><span
                                            className="sc_button_title">Nasza winnica</span></span> </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutPlace;