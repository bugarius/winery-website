import React, {useEffect} from "react";
import {BodyClassNames, useResponsiveContext} from "../../../MainApp/HomeApp/ResponsiveContext";
import {useScrollContext} from "../../../MainApp/HomeApp/ScrollContext";

export const withDefaultAppLayoutHOC = <AppWrapperProps, >(WrappedComponent: React.ComponentType<AppWrapperProps>) => (props: AppWrapperProps) => {

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

    return <WrappedComponent {...props} />
};