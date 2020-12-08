import React from "react";
import {NavLink} from "react-router-dom";
import {FileUtils} from "../../shared/Utils";
import {useResponsiveContext} from "../../../MainApp/HomeApp/ResponsiveContext";
import {FullWideImage} from "../FullWideImage";
import {useScrollContext} from "../../../MainApp/HomeApp/ScrollContext";

interface Props
{
    title?: string;
    category?: string;
    endsBreadcrumbs?: boolean;
    disableBreadcrumbs?: boolean;
    fullWideImage?: string;
}

const Header: React.FC<Props> = ({
                                     children,
                                     title,
                                     category,
                                     endsBreadcrumbs,
                                     disableBreadcrumbs,
                                     fullWideImage
                                 }) => {

    const {toggleOpenMenu, bodyClassNames} = useResponsiveContext();
    const {showElementsOnScroll} = useScrollContext();
    const {isMobile} = useResponsiveContext();

    if (bodyClassNames.site !== "home page page-template-default")
    {
        return (
            <header className="top_panel top_panel_style_1 without_bg_image with_featured_image scheme_default">
                <NavLink to={""} className="menu_mobile_button google-drive-opener" onClick={e => {
                    toggleOpenMenu();
                    e.preventDefault()
                }}/>
                <div className="top_panel_fixed_wrap" style={{height: "288px"}}/>
                <div
                    className={"top_panel_navi scheme_default " + (!isMobile && (showElementsOnScroll ? "state_fixed fixed_menu_slide_in" : "fixed_menu_slide_out"))}>
                    <div className="menu_main_wrap clearfix">
                        <div className="wrap">
                            <NavLink to={"/"} className={"logo google-drive-opener"}><img
                                src={FileUtils.getImage("logo.png")} className="logo_main"
                                alt=""/></NavLink>
                            {children}
                        </div>
                    </div>
                </div>
                <div className="top_panel_title_wrap" style={{width: "auto"}}>
                    <div className="content_wrap">
                        {title &&
                        <div className="top_panel_title">
                            <div className="page_title">
                                <div className="post_meta"><span
                                    className="post_meta_item post_categories">{category}</span>
                                </div>
                                <h1 className="page_caption">{title}</h1>
                            </div>
                            {!disableBreadcrumbs &&
                            <div className="breadcrumbs">
                                <NavLink to={"/"}>Start</NavLink>
                                <span className="breadcrumbs_delimiter"/>
                                {endsBreadcrumbs && <span className="breadcrumbs_item current">{title}</span>}
                                {
                                    !endsBreadcrumbs &&
                                    [
                                        <NavLink to={"/wina/karta_win"} key={1}>Karta win</NavLink>,
                                        <span className="breadcrumbs_delimiter" key={2}/>,
                                        <span className="breadcrumbs_item current" key={3}>{title}</span>
                                    ]
                                }
                            </div>
                            }
                        </div>
                        }
                    </div>
                </div>
                {fullWideImage && <FullWideImage image={fullWideImage} header/>}
            </header>
        )
    }
    return (
        <header className="top_panel top_panel_style_1 without_bg_image scheme_default">
            <NavLink to={""} className="menu_mobile_button google-drive-opener" onClick={e => {
                toggleOpenMenu();
                e.preventDefault()
            }}/>
            <div className="top_panel_fixed_wrap"/>
            <div className="top_panel_navi scheme_dark">
                <div className="menu_main_wrap clearfix">
                    <div className="wrap">
                        <NavLink to={"/"} className={"logo google-drive-opener"}><img
                            src={FileUtils.getImage("logo.png")}
                            className="logo_main"
                            alt=""/></NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;