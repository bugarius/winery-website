import React, {useEffect, useState} from "react";
import {useScrollContext} from "../../../HomeApp/ScrollContext";

export const SliderTop = () => {
    const [hasTopMenu, setHasTopMenu] = useState(document.body.classList.contains('menu_style_top'));
    const {scrollToTop} = useScrollContext();

    useEffect(() => {
        setHasTopMenu(document.body.classList.contains('menu_style_top'))
    }, [hasTopMenu])

    return (
        <div onClick={() => scrollToTop()}
             className={
                 "trx_addons_scroll_to_top trx_addons_icon-up inited sc_button_hover_slide_top show google-drive-opener" +
                    (hasTopMenu ? " show" : "")}
        />
    )
};