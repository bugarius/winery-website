import React, {useEffect} from "react";
import Header from "../../commons/components/Header";
import Menu from "../../commons/components/Menu";
import ContentWrapper from "../../commons/components/wrappers/ContentWrapper";
import VineyardTopComponent from "./VineyardTopComponent";
import OurWines from "./OurWines";
import AboutWine from "./AboutWine";
import Contact from "./Contact";
import Footer from "../../commons/components/Footer";
import PageWrapper from "../../commons/components/wrappers/PageWrapper";
import AboutPlace from "./AboutPlace";
import {BodyClassNames, useResponsiveContext} from "./ResponsiveContext";
import Badges from "../../commons/components/Badges";

const HomeApp = () => {
    const {modifyBodyClassName} = useResponsiveContext();

    useEffect(() => {
        const homeClassConfig: BodyClassNames = {
            blogMode: "blog_mode_home",
            headerPosition: "header_position_over",
            headerTitle: "header_title_off",
            margins: "remove_margins",
            site: "home page page-template-default",
            type: "is_stream blog_style_excerpt",
            menu_style: "menu_style_side",
        }

        modifyBodyClassName(homeClassConfig);
    }, [modifyBodyClassName])

    return (
        <PageWrapper>
            <Header/>
            <Menu/>
            <ContentWrapper>
                <VineyardTopComponent showPopupDots />
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