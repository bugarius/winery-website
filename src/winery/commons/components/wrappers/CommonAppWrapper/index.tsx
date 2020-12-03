import {BodyClassNames, useResponsiveContext} from "../../../../MainApp/HomeApp/ResponsiveContext";
import {useScrollContext} from "../../../../MainApp/HomeApp/ScrollContext";
import React, {FC, useEffect} from "react";
import PageWrapper from "../PageWrapper";
import Header from "../../Header";
import HorizontalMenu from "../../HorizontalMenu";
import Menu from "../../Menu";
import Footer from "../../Footer";

interface Props {
    title: string;
    fullWideImage?: string;
}

export const CommonAppWrapper: FC<Props> = ({children, title, fullWideImage}) => {

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
            <Header title={title} endsBreadcrumbs fullWideImage={fullWideImage}>
                <HorizontalMenu show={!isMobile}/>
            </Header>
            <Menu show={isMobile}/>
            {children}
            <Footer/>
        </PageWrapper>
    )
};