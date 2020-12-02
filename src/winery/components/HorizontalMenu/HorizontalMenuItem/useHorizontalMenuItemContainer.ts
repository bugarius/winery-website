import {MouseEvent, useState} from "react";
import {HorizontalMenuState} from "./HorizontalMenuItemPresentation";

interface HorizontalMenuItemContainer {
    showMenuItemChildren: (event: MouseEvent<HTMLAnchorElement | HTMLUListElement>) => void;
    hideMenuItemChildren: () => void;
    state: HorizontalMenuState;
}

export const useHorizontalMenuItemContainer = (link = ""): HorizontalMenuItemContainer => {

    const defaultState: HorizontalMenuState = {
        ulClassName: "fadeOutDownSmall fade_out",
        liClassName: "",
        display: "none",
        active: window.location.hash.includes(link) && link !== null && link !== undefined && link !== "/" && link !== ""
    }

    const [state, setState] = useState(defaultState)

    let timer: any = null;

    const showMenuItemChildren = (event: MouseEvent<HTMLAnchorElement | HTMLUListElement>) => {
        event.preventDefault();
        clearTimeout(timer);
        setState({...state, ulClassName: "fadeInUpSmall", liClassName: "sfHover", display: "block"})
    }

    const hideMenuItemChildren = () => {
        timer = setTimeout(() => {
            setState({...defaultState, display: "block"});
        }, 100);
    }

    return {showMenuItemChildren, hideMenuItemChildren, state}
};