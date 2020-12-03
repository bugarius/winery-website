import React, {useEffect} from "react";
import PageWrapper from "../components/wrappers/PageWrapper";
import Header from "../components/Header";
import Menu from "../components/Menu";
import {WineList} from "../components/WineList";
import Footer from "../components/Footer";
import {ProductDetails} from "../components/WineList/ProductDetails";
import {useWineConcat, WineInList} from "../components/shared/useWineConcat";
import {useParams} from "react-router-dom";
import wines from "../model/data/wines.json";
import {Wine} from "../model/Wine";
import wineList from "../components/WineList/data/wine-list.json";
import {useTranslation} from "react-i18next";
import {BodyClassNames, useResponsiveContext} from "../HomeApp/ResponsiveContext";
import HorizontalMenu from "../components/HorizontalMenu";
import {useScrollContext} from "../HomeApp/ScrollContext";

export const ProductApp = () => {
    const {t} = useTranslation();
    const {id} = useParams();

    const wineInLists = useWineConcat<WineInList>(wines as Wine[], wineList as WineList[]);
    const wine = wineInLists.find(w => w.id.toString() === id) as WineInList;


    const {modifyBodyClassName, isMobile} = useResponsiveContext();
    const {showElementsOnScroll} = useScrollContext();

    useEffect(() => {
        const wineClassConfig: BodyClassNames = {
            blogMode: "blog_mode_shop",
            headerPosition: "header_position_default",
            headerTitle: "header_title_on",
            site: "single single-product woocommerce woocommerce-page",
            type: "is_stream blog_style_excerpt",
            menu_style: "menu_style_top",
            topPanelFix: (showElementsOnScroll && !isMobile ? "top_panel_fixed" : "")
        }

        modifyBodyClassName(wineClassConfig);
    }, [modifyBodyClassName, isMobile, showElementsOnScroll])

    return (
        <PageWrapper>
            <Header title={`${wine.variety} ${wine.year}`}>
                <HorizontalMenu show={!isMobile}/>
            </Header>
            <Menu show={isMobile}/>
            <ProductDetails imgUrl={wine.imgUrl}
                            year={wine.year}
                            variety={wine.variety}
                            description={wine.description}
                            type={t(`WINE.TASTE.${wine.type}`)}
                            key={wine.id}
                            invert={wine.id % 2 === 0}
                            id={wine.id}
                            price={wine.price}
                            color={t(`WINE.COLOR.${wine.color}`)}
            />
            <Footer/>
        </PageWrapper>
    )
};