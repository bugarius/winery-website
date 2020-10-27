import React from "react";
import useToggle from "../../shared/useToggle";
import {Collapse} from "react-collapse";
import {NavLink} from "react-router-dom";

interface Props
{
    title: string;
    hasChildren?: boolean;
    link?: string;
}

const MenuItem: React.FC<Props> = ({title, hasChildren, children, link = ""}) => {

    const [opened, toggleOpen] = useToggle();

    return (
        <li className={"menu-item " + (hasChildren && "menu-item-has-children ") + (opened && "opened")}
            style={{cursor: 'pointer'}}>
            <NavLink to={link} className="nav-link">
                <span className="open_child_menu" onClick={e => {
                    e.preventDefault();
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