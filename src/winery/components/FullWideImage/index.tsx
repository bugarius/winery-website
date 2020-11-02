import React, {FC} from "react";
import {FileUtils} from "../shared/Utils";

export const FullWideImage: FC<{image: string}> = ({image}) => {

    return (
        <div
            className="post_featured post_featured_fullwide"
            style={{ backgroundImage: `url(${FileUtils.getImage(image)})` }}
        />
    )
};