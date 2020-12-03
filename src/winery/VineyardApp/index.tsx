import React, {useEffect} from "react";
import PageWrapper from "../components/wrappers/PageWrapper";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import {BodyClassNames, useResponsiveContext} from "../HomeApp/ResponsiveContext";
import {AboutVineyard} from "../components/AboutVineyard";
import HorizontalMenu from "../components/HorizontalMenu";
import {useScrollContext} from "../HomeApp/ScrollContext";

export const VineyardApp = () => {

    const {modifyBodyClassName, isMobile} = useResponsiveContext();
    const {showElementsOnScroll} = useScrollContext();

    useEffect(() => {
        const wineClassConfig: BodyClassNames = {
            blogMode: "blog_mode_page",
            headerPosition: "header_position_default",
            headerTitle: "header_title_on",
            margins: "remove_margins",
            site: "page page-template-default",
            type: "is_single",
            menu_style: "menu_style_top",
            topPanelFix: (showElementsOnScroll && !isMobile ? "top_panel_fixed" : "")
        }

        modifyBodyClassName(wineClassConfig);
    }, [modifyBodyClassName, isMobile, showElementsOnScroll])

    return (
        <PageWrapper>
            <Header title={"Nasza winnica"} endsBreadcrumbs fullWideImage={"winnica_bugara.jpg"}>
                <HorizontalMenu show={!isMobile}/>
            </Header>
            <Menu show={isMobile}/>
            <AboutVineyard/>
            <Footer/>
        </PageWrapper>
    )
};