import React, {FC} from "react";
import {HorizontalMenuSection} from "./HorizontalMenuSection";
import {HorizontalMenuItem} from "./HorizontalMenuItem";

const HorizontalMenu: FC<{ show: boolean }> = ({show}) => {

    return show ? (
        <HorizontalMenuSection>
            <HorizontalMenuItem link={"/"} text={"Start"}/>
            <HorizontalMenuItem link={"/winnica"} text={"Winnica"}/>
            <HorizontalMenuItem link={"/o_nas"} text={"Jak tworzymy"}/>
            <HorizontalMenuItem link={"/wina"} text={"Wina"}>
                <HorizontalMenuItem link={"/wina/karta_win"} text={"Karta win"}/>
                <HorizontalMenuItem link={"/wina/sprzedaz"} text={"Sprzedaż"}/>
            </HorizontalMenuItem>
            <HorizontalMenuItem link={"/kontakt"} text={"Kontakt"}/>
        </HorizontalMenuSection>
    ) : null;
}

export default HorizontalMenu;
