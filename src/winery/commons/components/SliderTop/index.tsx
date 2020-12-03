import React, {FC} from "react";
import {useScrollContext} from "../../../MainApp/HomeApp/ScrollContext";

export const SliderTop: FC<{}> = () => {
    const {scrollToTop, showElementsOnScroll} = useScrollContext();

    return (

        <div onClick={() => scrollToTop()}
             className={
                 "trx_addons_scroll_to_top trx_addons_icon-up inited sc_button_hover_slide_top google-drive-opener" +
                 (showElementsOnScroll ? " show" : "")}
        />
    )
};