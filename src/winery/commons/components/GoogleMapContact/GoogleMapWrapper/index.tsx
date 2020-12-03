import React, {FC} from "react";

export const GoogleMapWrapper: FC<{}> = ({children}) => {
    return (
        <div className="content_wrap">
            <div className="post_content entry-content">
                <div className="wpb_wrapper">
                    <div id="sc_googlemap_1883708744_wrap" className="sc_googlemap_wrap">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};