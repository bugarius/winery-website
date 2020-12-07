import React, {FC} from "react";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";
import {useScrollContext} from "../../../MainApp/HomeApp/ScrollContext";

const Menu: FC<{show?: boolean}> = ({show = true}) => {

    const {scrollToRef, refs} = useScrollContext();

    return show ? (
        <MenuSection>
            <MenuItem title={"START"} link={"/"} scrollToRef={() => scrollToRef(refs.home)}/>
            <MenuItem title={"WINNICA"} link={"/winnica"}/>
            <MenuItem title={"JAK TWORZYMY"} link={"/o_nas"}/>
            <MenuItem title={"WINA"} scrollToRef={() => scrollToRef(refs.wines)} hasChildren>
                <MenuItem title={"KARTA WIN"} link={"/wina/karta_win"}/>
                <MenuItem title={"SPRZEDAŻ"} link={"/wina/sprzedaz"}/>
            </MenuItem>
            <MenuItem title={"KONTAKT"} link={"/kontakt"}/>
        </MenuSection>
    ) : null;
}

export default Menu;
