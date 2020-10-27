import React from "react";
import {FileUtils} from "../shared/Utils";

interface Props
{
    title:string;
    subTitle: string;
    text: string;
    imgSrc: string;
}

const AboutWine: React.FC<Props> = ({title, subTitle, text, imgSrc}) => {
    return (
        <div className="row row-no-padding row-o-full-height row-o-columns-stretch row-o-equal-height">
            <div className="wpb_column vc_column_container column-12_12 vc_col-has-fill">
                <div className="vc_column-inner vc_custom_1465806595697">
                    <div className="wpb_wrapper">
                        <i id="sc_anchor_wine_essentials" className="sc_anchor" title="Wine Essentials"/>
                        <div className="sc_promo sc_promo_default sc_promo_size_large">
                            <div className="sc_promo_image"
                                 style={{backgroundImage: `url(${FileUtils.getImage(imgSrc)})`, width: '50%', right: 0}}/>
                            <div className="sc_promo_text trx_addons_stretch_height"
                                 style={{width: '50%', float: 'left'}}>
                                <div className="sc_promo_text_inner sc_align_center">
                                    <div className="sc_promo_icon"><span
                                        className="icon-grape-leafs"/></div>
                                    <h2 className="sc_item_title sc_promo_title">{title}</h2>
                                    <h5 className="sc_item_subtitle sc_promo_subtitle">{subTitle}</h5>
                                    <div className="sc_item_descr sc_promo_descr">{text}</div>
                                    <div className="sc_item_button sc_promo_button sc_button_wrap"><div
                                        className="sc_button sc_button_simple sc_button_size_normal sc_button_icon_top"><span
                                        className="sc_button_icon"><span className="icon-down-big"/></span><span
                                        className="sc_button_text"><span
                                        className="sc_button_title">NASZA FILOZOFIA</span></span> </div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutWine;