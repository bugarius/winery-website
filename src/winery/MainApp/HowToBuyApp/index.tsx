import React, {useEffect} from "react";
import PageWrapper from "../../commons/components/wrappers/PageWrapper";
import Header from "../../commons/components/Header";
import Menu from "../../commons/components/Menu";
import Footer from "../../commons/components/Footer";
import {BodyClassNames, useResponsiveContext} from "../HomeApp/ResponsiveContext";
import {HowToBuyWinePage} from "./HowToByWinePage";
import HorizontalMenu from "../../commons/components/HorizontalMenu";
import {useScrollContext} from "../HomeApp/ScrollContext";

export const HowToBuyApp = () => {

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
            <Header title={"Sprzedaż"} endsBreadcrumbs >
                <HorizontalMenu show={!isMobile}/>
            </Header>
            <Menu show={isMobile}/>
            <HowToBuyWinePage/>
            <Footer/>
        </PageWrapper>
    )
};