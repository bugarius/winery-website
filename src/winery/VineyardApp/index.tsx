import React, {useEffect} from "react";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import {BodyClassNames, useResponsiveContext} from "../HomeApp/ResponsiveContext";
import {AboutVineyard} from "../components/AboutVineyard";

export const VineyardApp = () => {

    const {modifyBodyClassName} = useResponsiveContext();

    useEffect(() => {
        const wineClassConfig: BodyClassNames = {
            blogMode: "blog_mode_page",
            headerPosition: "header_position_default",
            headerTitle: "header_title_on",
            margins: "remove_margins",
            site: "page page-template-default",
            type: "is_single"
        }

        modifyBodyClassName(wineClassConfig);
    }, [modifyBodyClassName])

    return (
        <PageWrapper>
            <Header title={"Nasza winnica"} endsBreadcrumbs fullWideImage={"winnica_bugara.jpg"}/>
            <Menu/>
            <AboutVineyard/>
            <Footer/>
        </PageWrapper>
    )
};