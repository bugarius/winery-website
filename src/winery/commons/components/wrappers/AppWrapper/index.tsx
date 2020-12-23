import {useResponsiveContext} from "../../../../MainApp/HomeApp/ResponsiveContext";
import React, {FC} from "react";
import PageWrapper from "../PageWrapper";
import Header from "../../Header";
import HorizontalMenu from "../../HorizontalMenu";
import Menu from "../../Menu";
import Footer from "../../Footer";
import {withDefaultAppLayoutHOC} from "../withDefaultAppLayoutHOC";
import {withProductAppLayoutHOC} from "../withProductAppLayoutHOC";

export interface AppWrapperProps {
    children: any;
    title?: string;
    category?: string;
    fullWideImage?: string;
    disableBreadcrumbs?: boolean;
}

interface DotNotationProps {
    Default: React.ComponentType<AppWrapperProps>;
    Product: React.ComponentType<AppWrapperProps>;
}

export const AppWrapper: FC<AppWrapperProps> & DotNotationProps = ({
                                                children,
                                                title,
                                                category,
                                                fullWideImage,
                                                disableBreadcrumbs
}) => {

    const {isMobile} = useResponsiveContext();

    return (
        <PageWrapper>
            <Header title={title}
                    category={category}
                    fullWideImage={fullWideImage}
                    disableBreadcrumbs={disableBreadcrumbs}
                    endsBreadcrumbs
            >
                <HorizontalMenu show={!isMobile}/>
            </Header>
            <Menu show={isMobile}/>
            {children}
            <Footer/>
        </PageWrapper>
    )
};

AppWrapper.Default = withDefaultAppLayoutHOC(AppWrapper);
AppWrapper.Product = withProductAppLayoutHOC(AppWrapper);