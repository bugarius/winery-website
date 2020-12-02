import React, {FC} from "react";
import {HorizontalMenuSection} from "./HorizontalMenuSection";
import {useScrollContext} from "../../HomeApp/ScrollContext";
import {HorizontalMenuItem} from "./HorizontalMenuItem";

const HorizontalMenu: FC<{show: boolean}> = ({show}) => {

    const {scrollToRef, refs} = useScrollContext();

    return show ? (
        <HorizontalMenuSection>
                <HorizontalMenuItem link={"/"} text={"Start"} onClick={() => scrollToRef(refs.home)}/>
                <HorizontalMenuItem link={"/winnica"} text={"Winnica"}/>
                <HorizontalMenuItem link={"/o_nas"} text={"Jak tworzymy"}/>
                <HorizontalMenuItem link={"/wina"} text={"Wina"}>
                    <HorizontalMenuItem link={"/wina/karta_win"} text={"Karta win"}/>
                    <HorizontalMenuItem link={"/wina/sprzedaz"} text={"Sprzedaż"}/>
                </HorizontalMenuItem>
                <HorizontalMenuItem link={"/"} text={"Kontakt"} onClick={() => scrollToRef(refs.contact)}/>
        </HorizontalMenuSection>
    ) : null;
}

export default HorizontalMenu;
