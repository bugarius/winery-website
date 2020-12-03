import React, {FC} from "react";
import {Link} from "react-router-dom";

interface Props {
    description: string;
    scrollToRef: () => void;
    link: string;
    active: boolean;
}

export const TocMenuItem: FC<Props> = ({description, scrollToRef, link, active}) => {
    return (
        <div className={"toc_menu_item" + (active ? " toc_menu_item_active" : "")}>
            <Link to={link} className="toc_menu_description google-drive-opener" onClick={(e) => {
                e.stopPropagation();
                scrollToRef()
            }}>
                <span className="toc_menu_description_title">{description}</span>
            </Link>
            <Link to={link} className="toc_menu_icon toc_menu_icon_default google-drive-opener" onClick={(e) => {
                e.stopPropagation();
                scrollToRef()
            }}/>
        </div>
    )
};