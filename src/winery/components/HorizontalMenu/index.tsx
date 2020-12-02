import React, {FC} from "react";
import {HorizontalMenuSection} from "./HorizontalMenuSection";
import {HorizontalMenuItem} from "./HorizontalMenuItem";
import {useScrollContext} from "../../HomeApp/ScrollContext";

const HorizontalMenu: FC<{show: boolean}> = ({show}) => {

    const {scrollToRef, refs} = useScrollContext();

    return show ? (
        <HorizontalMenuSection>
                <HorizontalMenuItem link={"/"} text={"Start"}/>
                <HorizontalMenuItem link={"/winnica"} text={"Winnica"}/>
                <HorizontalMenuItem link={"/o_nas"} text={"Jak tworzymy"}/>
                <HorizontalMenuItem link={"/wina"} text={"Wina"}>
                    <HorizontalMenuItem link={"/wina/karta_win"} text={"Karta win"}/>
                    <HorizontalMenuItem link={"/wina/sprzedaz"} text={"Sprzedaż"}/>
                </HorizontalMenuItem>
                <HorizontalMenuItem link={"/"} text={"Kontakt"} onClick={() => scrollToRef(refs.contact)}/>
            {/*Searching component*/}
            {/*<div className="search_wrap search_style_fullscreen inited">*/}
            {/*    <div className="search_form_wrap">*/}
            {/*        <form role="search" method="get" className="search_form" action="#">*/}
            {/*            <input type="text" className="search_field" placeholder="Search" name="s"/>*/}
            {/*            <button type="submit" className="search_submit icon-search"/>*/}
            {/*            <a className="search_close icon-cancel"/>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*    <div className="search_results widget_area">*/}
            {/*        <a href="#" className="search_results_close icon-cancel"/>*/}
            {/*        <div className="search_results_content"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </HorizontalMenuSection>
    ) : null;
}

export default HorizontalMenu;
