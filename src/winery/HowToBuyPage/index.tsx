import React, {useEffect} from "react";
import PageWrapper from "../components/wrappers/PageWrapper";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import {BodyClassNames, useResponsiveContext} from "../HomeApp/ResponsiveContext";
import {ContactUs} from "../components/ContactUs";
import HorizontalMenu from "../components/HorizontalMenu";

export const HowToBuyPage = () => {

    const {modifyBodyClassName, isMobile} = useResponsiveContext();

    useEffect(() => {
        const wineClassConfig: BodyClassNames = {
            blogMode: "blog_mode_page",
            headerPosition: "header_position_default",
            headerTitle: "header_title_on",
            margins: "remove_margins",
            site: "page page-template-default",
            type: "is_single",
            menu_style: (isMobile ? "menu_style_side" : "menu_style_top")
        }

        modifyBodyClassName(wineClassConfig);
    }, [modifyBodyClassName, isMobile])

    return (
        <PageWrapper>
            <Header title={"Sprzedaż"} endsBreadcrumbs >
                <HorizontalMenu show={!isMobile}/>
            </Header>
            <Menu show={isMobile}/>
            <ContactUs/>
            <Footer/>
        </PageWrapper>
    )
};