import React, {FC} from "react";
import {HorizontalMenuItemPresentation} from "./HorizontalMenuItemPresentation";
import {useHorizontalMenuItemContainer} from "./useHorizontalMenuItemContainer";

interface Props
{
    link?: string;
    text: string;
    onClick?: () => void;
}

export const HorizontalMenuItem: FC<Props> = (props) => {

    const horizontalMenuItemProps = useHorizontalMenuItemContainer(props.link);

    return <HorizontalMenuItemPresentation {...horizontalMenuItemProps} {...props}/>
};