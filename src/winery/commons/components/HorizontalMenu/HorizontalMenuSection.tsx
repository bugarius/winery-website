import React, {FC} from "react";

export const HorizontalMenuSection: FC<{}> = ({children}) => {
    return (
        <nav className="menu_main_nav_area menu_hover_fade menu_show">
            <ul id="menu_main" className="menu_main_nav inited sf-js-enabled sf-arrows">
                {children}
            </ul>
        </nav>
    )
};