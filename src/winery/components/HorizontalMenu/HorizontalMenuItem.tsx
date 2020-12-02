import React, {FC, MouseEvent, useState} from "react";
import {Link} from "react-router-dom";

interface Props
{
    link?: string;
    text: string;
    onClick?: () => void;
}

export const HorizontalMenuItem: FC<Props> = ({children, link = "", text, onClick}) => {

    const defaultState = {
        ulClassName: "fadeOutDownSmall fade_out",
        liClassName: "",
        display: "none",
        active: window.location.hash.includes(link) && link && link !== "/" && link !== ""
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

    const handleOnClick = () => {
        onClick && onClick();
    }

    return children ? (
            <li className={"menu-item menu-item-has-children " + state.liClassName + (state.active ? " current-menu-item wer" : "")}
                onMouseLeave={hideMenuItemChildren}>
                <Link to={link} onClick={showMenuItemChildren} onMouseEnter={showMenuItemChildren}><span>{text}</span></Link>
                <ul className={"sub-menu animated fast " + state.ulClassName}
                    style={{display: state.display}}
                    onMouseEnter={(e) => showMenuItemChildren(e)}
                >
                    {children}
                </ul>
            </li>
        )
        : (
            <li className={"menu-item" + (state.active ? " current-menu-item wer" : "")}>
                <Link onClick={handleOnClick} to={link}><span>{text}</span></Link>
            </li>
        )
};