import React from "react";
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

const HomeApp = () => {
    return (
        <PageWrapper>
            <Header/>
            <Menu/>
            <ContentWrapper>
                <VineyardTopComponent/>
                <OurWines/>
                <AboutWine title={"Najwyższa jakość wina"}
                           subTitle={"Produkujemy wino z myślą o naszych klientach, dlatego też dbamy o jakość na każdym etapie produkcji..."}
                           text={"Jednym z elementów, które mają duży wpływ na jakość naszych win jest produkcja wina z soku ociekowego, czyli takiego, który jest pozyskiwany poprzez lekkie zgniecenie winogron z pominięciem ich tłoczenia (prasowania)."}
                           imgSrc={"images/image-22.jpg"}
                />
                <AboutPlace/>
                {/*<Events/>*/}
                {/*<Badges/>*/}
                <Contact/>
            </ContentWrapper>
            <Footer/>
        </PageWrapper>
    )
};

export default HomeApp;