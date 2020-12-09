import React from "react";
import useToggle from "../../../shared/useToggle";
import {Collapse} from "react-collapse";
import {NavLink} from "react-router-dom";
import {useResponsiveContext} from "../../../../MainApp/HomeApp/ResponsiveContext";

interface Props
{
    title: string;
    hasChildren?: boolean;
    link?: string;
    scrollToRef?: () => void;
}

const MenuItem: React.FC<Props> = ({title, hasChildren, children, link = "", scrollToRef}) => {

    const [opened, toggleOpen] = useToggle();
    const {closeMenu} = useResponsiveContext();

    return (
        <li className={"menu-item " + (hasChildren && "menu-item-has-children ") + (opened && "opened")}
            style={{cursor: 'pointer'}}>
            <NavLink to={link} className="nav-link" onClick={(e) => {
                !hasChildren && closeMenu();
                hasChildren && e.preventDefault();
                hasChildren && !scrollToRef && toggleOpen();
                scrollToRef && scrollToRef()
            }}>
                <span className="open_child_menu" onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleOpen();
                }}
                      style={{cursor: 'pointer', display: (hasChildren ? "block" : "none")}}/>
                <span>{title}</span>
            </NavLink>
            <Collapse isOpened={opened}>
                <ul className="sub-menu" style={{display: "block"}}>
                    {children}
                </ul>
            </Collapse>
        </li>
    )
};

export default MenuItem;