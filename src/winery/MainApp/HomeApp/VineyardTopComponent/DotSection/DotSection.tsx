import React from "react";
import {FileUtils} from "../../../../commons/shared/Utils";

interface Props
{
    showPopupDots?: boolean;
    children: JSX.Element[];
}

export const DotSection: React.FC<Props> = ({
                                                showPopupDots,
                                                children,
                                            }) => {

    return (
        <div className="wpb_column vc_column_container column-3_12">
            <div className="vc_column-inner ">
                <div className="wpb_wrapper" style={{display: (showPopupDots ? "block" : "none")}}>
                    <div style={{width: ''}} className="cqtooltip-wrapper hide_on_mobile"><img
                        src={FileUtils.getImage("spacer.png")} alt=""/>
                        <div className="cq-hotspots">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}