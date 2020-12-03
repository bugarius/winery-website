import React, {FC} from "react";

export const TocMenuSection: FC<{show?: boolean}> = ({children, show}) => {
    return (
        <div id="toc_menu" className="toc_menu inited">
            <div className="toc_menu_inner">
                {show && children}
            </div>
        </div>
    )
};