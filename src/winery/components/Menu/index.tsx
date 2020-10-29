import React from "react";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";

const Menu = () => {
    return (
        <MenuSection>
            <MenuItem title={"START"} link={"/"}/>
            <MenuItem title={"WINA"} link={"/karta_win"}/>
            <MenuItem title={"NASZA FILOZOFIA"} link={"/o_nas"}/>
            {/*<MenuItem title={"ZAMÓW WINA"} hasChildren link={"/karta_win"}>*/}
            {/*    <MenuItem title={"LISTA WIN"}/>*/}
            {/*    <MenuItem title={"KOSZYK"}/>*/}
            {/*</MenuItem>*/}
            <MenuItem title={"WINNICA"} link={"/winnica"}/>
            <MenuItem title={"KONTAKT"}/>
        </MenuSection>
    )
}

export default Menu;
