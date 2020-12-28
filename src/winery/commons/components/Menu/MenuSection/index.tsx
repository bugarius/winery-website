import React from "react";
import {NavLink} from "react-router-dom";
import {useResponsiveContext} from "../../../../MainApp/HomeApp/ResponsiveContext";
import useClickOutside from "../../../shared/useClickOutside";
import {TocMenuSection} from "../TocMenu/TocMenuSection";
import {TocMenuItem} from "../TocMenu/TocMenuItem";
import {useScrollContext} from "../../../../MainApp/HomeApp/ScrollContext";

const MenuSection: React.FC<{}> = ({children}) => {

    const {toggleOpenMenu, isMenuOpen, closeMenu, isMobile, bodyClassNames} = useResponsiveContext();
    const {wrapperRef} = useClickOutside(closeMenu)
    const {scrollToRef, refs, activeRef} = useScrollContext();
    const isHomePage = window.location.hash === "#/";

    return (
        <>
            {(!isMobile && bodyClassNames.menu_style === "menu_style_side") &&
                <div className="menu_side_wrap scheme_dark">
                    <div className="menu_side_inner" onClick={toggleOpenMenu}>
                        <NavLink className="menu_mobile_button menu_mobile_button_text" to={""}
                                 onClick={e => e.preventDefault()}>MENU</NavLink>
                        <TocMenuSection show={isHomePage}>
                            <TocMenuItem description={"Na prezent"} scrollToRef={() => scrollToRef(refs.gift)}
                                         link={"/"} active={activeRef === refs.gift}/>
                            <TocMenuItem description={"Winnica"} scrollToRef={() => scrollToRef(refs.aboutPlace)}
                                         link={"/"} active={activeRef === refs.aboutPlace}/>
                            <TocMenuItem description={"Jak tworzymy"} scrollToRef={() => scrollToRef(refs.aboutUs)}
                                         link={"/"} active={activeRef === refs.aboutUs}/>
                            <TocMenuItem description={"Wina"} scrollToRef={() => scrollToRef(refs.wines)} link={"/"}
                                         active={activeRef === refs.wines}/>
                            <TocMenuItem description={"Kontakt"} scrollToRef={() => scrollToRef(refs.contact)}
                                         link={"/"} active={activeRef === refs.contact}/>
                        </TocMenuSection>
                    </div>
                </div>
            }
            <div className="menu_mobile_overlay"/>
            <div className={'menu_mobile scheme_dark ' + (isMenuOpen && "opened")} ref={wrapperRef}>
                <div className="menu_mobile_inner">
                    <NavLink className="menu_mobile_close icon-cancel google-drive-opener" onClick={e => {
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