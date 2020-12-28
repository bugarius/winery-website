import React, {useEffect} from "react";
import {BodyClassNames, useResponsiveContext} from "../../../MainApp/HomeApp/ResponsiveContext";
import {useScrollContext} from "../../../MainApp/HomeApp/ScrollContext";

export const withProductAppLayoutHOC = <AppWrapperProps, >(WrappedComponent: React.ComponentType<AppWrapperProps>) => (props: AppWrapperProps) => {

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

    return <WrappedComponent {...props} />
};