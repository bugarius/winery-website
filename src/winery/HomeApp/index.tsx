import React, {useEffect} from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ContentWrapper from "../components/ContentWrapper";
import VineyardTopComponent from "../components/VineyardTopComponent";
import OurWines from "../components/OurWines";
import AboutWine from "../components/AboutWine";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import AboutPlace from "../components/AboutPlace";
import {BodyClassNames, useResponsiveContext} from "./ResponsiveContext";
import Badges from "../components/Badges";

const HomeApp = () => {
    const {modifyBodyClassName} = useResponsiveContext();

    useEffect(() => {
        const homeClassConfig: BodyClassNames = {
            blogMode: "blog_mode_home",
            headerPosition: "header_position_over",
            headerTitle: "header_title_off",
            margins: "remove_margins",
            site: "home page page-template-default",
            type: "is_stream blog_style_excerpt"
        }

        modifyBodyClassName(homeClassConfig);
    }, [modifyBodyClassName])

    return (
        <PageWrapper>
            <Header/>
            <Menu/>
            <ContentWrapper>
                <VineyardTopComponent/>
                <AboutPlace/>
                <AboutWine title={"Najwyższa jakość wina"}
                           subTitle={"Produkujemy wino z myślą o naszych klientach, dlatego też dbamy o jakość na każdym etapie produkcji..."}
                           text={"Jednym z elementów, które mają duży wpływ na jakość naszych win jest produkcja wina z soku ociekowego, czyli takiego, który jest pozyskiwany poprzez lekkie zgniecenie winogron z pominięciem ich tłoczenia (prasowania)."}
                           imgSrc={"image-22.jpg"}
                />
                <OurWines/>
                {/*<Events/>*/}
                <Badges/>
                <Contact/>
            </ContentWrapper>
            <Footer/>
        </PageWrapper>
    )
};

export default HomeApp;