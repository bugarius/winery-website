import React from "react";
import {NavLink} from "react-router-dom";
import {FileUtils} from "../shared/Utils";
import {useResponsiveContext} from "../../HomeApp/ResponsiveContext";

const Header: React.FC<{ title?: string, endsBreadcrumbs?: boolean }> = ({children, title, endsBreadcrumbs}) => {

    const {toggleOpenMenu} = useResponsiveContext();

    if (title !== undefined)
    {
        return (
            <header className="top_panel top_panel_style_1 without_bg_image with_featured_image scheme_default">
                <i className="menu_mobile_button google-drive-opener" onClick={toggleOpenMenu}/>
                <div className="top_panel_fixed_wrap"/>
                <div className="top_panel_navi scheme_default">
                    <div className="menu_main_wrap clearfix">
                        <div className="wrap">
                            <NavLink to={"/"} className={"logo google-drive-opener"}><img
                                src={FileUtils.getImage("logo.png")} className="logo_main"
                                alt=""/></NavLink>
                            {children &&
                            <div className="top_panel_navi scheme_default" style={{marginTop: '0px'}}>
                                <nav className="menu_main_nav_area menu_hover_fade menu_show">{children}</nav>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="top_panel_title_wrap">
                    <div className="content_wrap">
                        <div className="top_panel_title">
                            <div className="page_title">
                                <h1 className="page_caption">{title}</h1>
                            </div>
                            <div className="breadcrumbs">
                                <NavLink to={"/"}>Start</NavLink>
                                <span className="breadcrumbs_delimiter"/>
                                {endsBreadcrumbs && <span className="breadcrumbs_item current">{title}</span>}
                                {
                                    !endsBreadcrumbs &&
                                    [
                                        <NavLink to={"/karta_win"}>Karta win</NavLink>,
                                        <span className="breadcrumbs_delimiter"/>,
                                        <span className="breadcrumbs_item current">{title}</span>
                                    ]
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    return (
        <header className="top_panel top_panel_style_1 without_bg_image scheme_default">
            <i className="menu_mobile_button google-drive-opener" onClick={toggleOpenMenu}/>
            <div className="top_panel_fixed_wrap"/>
            {/*<div className="top_panel_navi scheme_dark">*/}
            <div className="menu_main_wrap clearfix">
                <div className="wrap">
                    <NavLink to={"/"} className={"logo google-drive-opener"}><img src={FileUtils.getImage("logo.png")}
                                                                                  className="logo_main"
                                                                                  alt=""/></NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;