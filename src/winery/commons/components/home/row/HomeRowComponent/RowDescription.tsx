import React from "react";
import {NavLink} from "react-router-dom";

interface Props
{
    title: string;
    subtitle: string;
    text: string;
    path?: string;
    linkText?: string;
    icon: string | "icon-grape-3" | "icon-grape-leafs" | "icon-bottles" | "icon-barrel" | "icon-glass" | "icon-trophy" | "icon-winery";
}

export const RowDescription: React.FC<Props> = ({title, subtitle, text, path, linkText, icon}) => {
    return (
        <div className="vc_column-inner ">
            <div className="wpb_wrapper">
                <i id="sc_anchor_our_wines" className="sc_anchor" title="Our Wines"/>
                <div className="sc_promo sc_promo_default sc_promo_size_large sc_promo_no_image">
                    <div className="sc_promo_text" style={{width: '100%'}}>
                        <div className="sc_promo_text_inner sc_align_center">
                            <div className="sc_promo_icon" data-icon="icon-bottles"><span
                                className={icon}/></div>
                            <h2 className="sc_item_title sc_promo_title">{title}</h2>
                            <h5 className="sc_item_subtitle sc_promo_subtitle">{subtitle}</h5>
                            <div className="sc_item_descr sc_promo_descr">{text}</div>
                            {path && linkText &&
                                <div className="row">
                                    <div className="wpb_column vc_column_container column-2_12">
                                        <div className="sc_item_button sc_promo_button sc_button_wrap">
                                            <NavLink
                                                className="sc_button sc_button_simple sc_button_size_normal sc_button_icon_top"
                                                to={path}><span
                                                className="sc_button_icon"><span className="icon-down-big"/></span><span
                                                className="sc_button_text"><span
                                                className="sc_button_title">{linkText}</span></span> </NavLink>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};