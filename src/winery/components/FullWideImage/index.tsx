import React, {FC} from "react";
import {FileUtils} from "../shared/Utils";

export const FullWideImage: FC<{image: string, header?: boolean}> = ({image, header}) => {

    if (header)
    {
        return (
            <div
                className="post_featured post_featured_fullwide"
                style={{backgroundImage: `url(${FileUtils.getImage(image)})`}}
            />
        )
    }
    return (
        <div className="row">
            <div className="wpb_column vc_column_container column-12_12 vc_col-has-fill">
                <div className="vc_column-inner"
                     style={{
                         backgroundImage: `url(${FileUtils.getImage(image)}`,
                         backgroundPosition: "center",
                         backgroundRepeat: "noRepeat",
                         backgroundSize: "cover"
                     }}>
                    <div className="wpb_wrapper">
                        <div className="vc_empty_space  height_huge" style={{height: 0}}/>
                        <div className="vc_empty_space  height_huge" style={{height: 0}}/>
                        <div className="vc_empty_space  height_huge" style={{height: 0}}/>
                        <div className="vc_empty_space  height_large" style={{height: 0}}/>
                        <div className="vc_empty_space  height_large" style={{height: 0}}/>
                        <div className="vc_empty_space  height_large" style={{height: 0}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};