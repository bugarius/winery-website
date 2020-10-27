import React from "react";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";

const Menu = () => {
    return (
        <MenuSection>
            <MenuItem title={"START"} link={"/"}/>
            <MenuItem title={"NASZA FILOZOFIA"}/>
            <MenuItem title={"CO TWORZYMY"}/>
            <MenuItem title={"WINA"} link={"/karta_win"}/>
            {/*<MenuItem title={"ZAMÓW WINA"} hasChildren link={"/karta_win"}>*/}
            {/*    <MenuItem title={"LISTA WIN"}/>*/}
            {/*    <MenuItem title={"KOSZYK"}/>*/}
            {/*</MenuItem>*/}
            <MenuItem title={"KONTAKT"}/>
            <MenuItem title={"O NASZEJ WINNICY"}/>
        </MenuSection>
    )
}

export default Menu;
