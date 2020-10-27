import React from "react";
import useToggle from "../../shared/useToggle";
import {NavLink} from "react-router-dom";

const MenuSection: React.FC<{}> = ({children}) => {
    const [opened, toggleOpen] = useToggle(false);
    return (
        <>
            <div className="menu_side_wrap scheme_dark">
                <div className="menu_side_inner" onClick={toggleOpen}>
                    <NavLink className="menu_mobile_button menu_mobile_button_text" to={""}
                             onClick={e => e.preventDefault()}>MENU</NavLink>
                </div>
            </div>
            <div className="menu_mobile_overlay"/>
            <div className={'menu_mobile scheme_dark ' + (opened && "opened")}>
                <div className="menu_mobile_inner">
                    <NavLink className="menu_mobile_close icon-cancel" onClick={e => {
                        e.preventDefault();
                        toggleOpen();
                    }}
                             to={""}/>
                    <nav className="menu_mobile_nav_area">
                        <ul id="menu_mobile" className="menu_mobile_nav" style={{textAlign: "left"}}>
                            {children}
                        </ul>
                    </nav>
                    <div className="socials_mobile">
                        <span className="social_item">
                        <a href="https://www.facebook.com/winnicabugara" rel="noopener noreferrer" target="_blank"
                           className="social_icons social_facebook">
                        <span className="trx_addons_icon-facebook"/>
                        </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MenuSection;