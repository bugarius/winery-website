import React from "react";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";
import {useScrollContext} from "../../HomeApp/ScrollContext";

const Menu = () => {

    const {scrollToRef, refs} = useScrollContext();

    return (
        <MenuSection>
            <MenuItem title={"START"} link={"/"} scrollToRef={() => scrollToRef(refs.home)}/>
            <MenuItem title={"WINNICA"} scrollToRef={() => scrollToRef(refs.aboutPlace)}/>
            <MenuItem title={"JAK TWORZYMY"} scrollToRef={() => scrollToRef(refs.aboutUs)}/>
            <MenuItem title={"WINA"} scrollToRef={() => scrollToRef(refs.wines)} hasChildren>
                <MenuItem title={"KARTA WIN"} link={"/karta_win"}/>
                <MenuItem title={"SPRZEDAŻ"} link={"/sprzedaz"}/>
            </MenuItem>
            <MenuItem title={"KONTAKT"} scrollToRef={() => scrollToRef(refs.contact)}/>
        </MenuSection>
    )
}

export default Menu;
