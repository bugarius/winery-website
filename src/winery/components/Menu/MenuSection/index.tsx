import React, {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import {useResponsiveContext} from "../../../HomeApp/ResponsiveContext";

const MenuSection: React.FC<{}> = ({children}) => {

    const {toggleOpenMenu, isMenuOpen, closeMenu} = useResponsiveContext();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('mousedown', (e) => handleClickOutside(e));
        return document.removeEventListener('mousedown', (e) => handleClickOutside(e));
    });

    const handleClickOutside = (event: any) => {
        if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains(event.target))
        {
            closeMenu();
        }
    };

    return (
        <>
            <div className="menu_side_wrap scheme_dark">
                <div className="menu_side_inner" onClick={toggleOpenMenu}>
                    <NavLink className="menu_mobile_button menu_mobile_button_text" to={""}
                             onClick={e => e.preventDefault()}>MENU</NavLink>
                </div>
            </div>
            <div className="menu_mobile_overlay"/>
            <div className={'menu_mobile scheme_dark ' + (isMenuOpen && "opened")} ref={wrapperRef}>
                <div className="menu_mobile_inner">
                    <NavLink className="menu_mobile_close" onClick={e => {
                        e.preventDefault();
                        toggleOpenMenu();
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