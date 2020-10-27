import React from "react";
import {PageElement} from "../PageWrapper";

const Footer: React.FC<PageElement> = () => {

    const year = new Date().getFullYear();
    return (
        <footer className="site_footer_wrap scheme_dark">
            <div className="logo_footer_wrap scheme_dark">
                <div className="logo_footer_wrap_inner">
                    <img src="/images/logo.png" className="logo_footer_image" alt=""/>
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
                            <li className="menu-item menu-item-143"><a href="home3.html"><span>Start</span></a></li>
                            <li className="menu-item menu-item-675"><a href="about-us.html"><span>Nasza filozofia</span></a>
                            </li>
                            <li className="menu-item menu-item-677"><a href="wine-list.html"><span>Co tworzymy</span></a>
                            </li>
                            <li className="menu-item menu-item-147"><a href="shop.html"><span>Sklep</span></a></li>
                            <li className="menu-item menu-item-676"><a href="contacts.html"><span>Polityka prywatności</span></a>
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