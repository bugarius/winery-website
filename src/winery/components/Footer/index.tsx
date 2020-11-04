import React from "react";
import {PageElement} from "../PageWrapper";
import {FileUtils} from "../shared/Utils";
import {NavLink} from "react-router-dom";

const Footer: React.FC<PageElement> = () => {

    const year = new Date().getFullYear();
    return (
        <footer className="site_footer_wrap scheme_dark">
            <div className="logo_footer_wrap scheme_dark">
                <div className="logo_footer_wrap_inner">
                    <img src={FileUtils.getImage("logo-footer.png")}
                         className="logo_footer_image"
                         alt="logo-bugara"
                         style={{maxHeight: "279px"}}
                    />
                </div>
            </div>
            <div className="socials_footer_wrap socials_wrap scheme_dark">
                <div className="socials_footer_wrap_inner">
             <span className="social_item">
                 <a href="https://www.facebook.com/winnicabugara" rel="noopener noreferrer" target="_blank" className="social_icons social_facebook">
                 <span className="trx_addons_icon-facebook"/></a>
             </span>
                </div>
            </div>
            <div className="menu_footer_wrap scheme_dark">
                <div className="menu_footer_wrap_inner">
                    <nav className="menu_footer_nav_area">
                        <ul id="menu_footer" className="menu_footer_nav">
                            <li className="menu-item menu-item-143"><NavLink to={"/"}><span>Start</span></NavLink></li>
                            <li className="menu-item menu-item-675"><NavLink to={"/karta_win"}><span>Wina</span></NavLink>
                            </li>
                            <li className="menu-item menu-item-677"><NavLink to={"/o_nas"}><span>Jak tworzymy</span></NavLink>
                            </li>
                            <li className="menu-item menu-item-147"><NavLink to={"/winnica"}><span>Winnica</span></NavLink></li>
                            <li className="menu-item menu-item-676"><NavLink to={"/"}><span>Kontakt</span></NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="copyright_wrap scheme_dark">
                <div className="copyright_wrap_inner">
                    <div className="content_wrap">
                        <div className="copyright_text">Bugara © {year}. Wszystkie prawa zastrzeżone.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;