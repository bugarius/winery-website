import React from "react";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Menu from "../components/Menu";
import {WineList} from "../components/WineList";
import Footer from "../components/Footer";

export const WineApp = () => {
    return (
        <PageWrapper>
            <Header title={"Karta win"} endsBreadcrumbs/>
            <Menu/>
            <WineList/>
            <Footer/>
        </PageWrapper>
    )
};