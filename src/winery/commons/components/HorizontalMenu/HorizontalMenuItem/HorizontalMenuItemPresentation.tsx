import React, {FC, MouseEvent} from "react";
import {Link} from "react-router-dom";

export interface HorizontalMenuState {
    ulClassName: "fadeOutDownSmall fade_out" | "fadeInUpSmall";
    liClassName: "" | "sfHover";
    display: "none" | "block";
    active: boolean;
}

interface Props
{
    link?: string;
    text: string;
    onClick?: () => void;
    state: HorizontalMenuState;
    hideMenuItemChildren: () => void;
    showMenuItemChildren: (event: MouseEvent<HTMLAnchorElement | HTMLUListElement>) => void;
}

export const HorizontalMenuItemPresentation: FC<Props> = ({
                                                  children,
                                                  link = "",
                                                  text,
                                                  onClick,
                                                  state,
                                                  hideMenuItemChildren,
                                                  showMenuItemChildren
}) => {

    return children ? (
            <li className={"menu-item menu-item-has-children " + state.liClassName + (state.active ? " current-menu-item wer" : "")}
                onMouseLeave={hideMenuItemChildren}>
                <Link to={link} onClick={showMenuItemChildren} onMouseEnter={showMenuItemChildren}><span>{text}</span></Link>
                <ul className={"sub-menu animated fast " + state.ulClassName}
                    style={{display: state.display}}
                    onMouseEnter={showMenuItemChildren}
                >
                    {children}
                </ul>
            </li>
        )
        : (
            <li className={"menu-item" + (state.active ? " current-menu-item wer" : "")}>
                <Link onClick={onClick} to={link}><span>{text}</span></Link>
            </li>
        )
};