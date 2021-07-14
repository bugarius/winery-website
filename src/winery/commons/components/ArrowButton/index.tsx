import {NavLink} from "react-router-dom";
import React, {FC} from "react";

export const ArrowButton: FC<{path: string, label: string}> = ({path, label}) => {
    return (
        <div
            className="sc_item_button sc_promo_button sc_button_wrap">
            <NavLink to={path}
                     className="sc_button sc_button_simple sc_button_size_normal
                                            sc_button_icon_top"><span
                className="sc_button_icon"><span
                className="icon-down-big"/></span><span
                className="sc_button_text"><span
                className="sc_button_title">{label}</span></span>
            </NavLink></div>
    )
}