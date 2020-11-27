import React, {FC} from "react";
import {RowWrapper} from "../wrappers/RowWrapper";

interface Props {
    icon: string | "icon-grape-3" | "icon-grape-leafs" | "icon-bottles" | "icon-barrel" | "icon-glass" | "icon-trophy" | "icon-winery";
    title: string;
    subtitle: string;
    paragraphs?: string[];
}

export const RowContent: FC<Props> = ({icon, title, subtitle, paragraphs}) => {

    return (
        <RowWrapper>
            <div className="wpb_column vc_column_container column-2_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper"/>
                </div>
            </div>
            <div className="wpb_column vc_column_container column-8_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                        <div className="vc_empty_space  height_tiny" style={{height: 0}}/>
                        <div
                            className="sc_promo sc_promo_default sc_promo_size_normal sc_promo_no_paddings sc_promo_no_image">
                            <div className="sc_promo_text" style={{width: "100%"}}>
                                <div className="sc_promo_text_inner sc_align_center">
                                    <div className="sc_promo_icon" data-icon="icon-grape-3">
                                        <span className={icon}/>
                                    </div>
                                    <h2 className="sc_item_title sc_promo_title">
                                        {title}
                                    </h2>
                                    <h5 className="sc_item_subtitle sc_promo_subtitle">
                                        {subtitle}
                                    </h5>
                                    <div className="sc_promo_content sc_item_content">
                                        <div className="wpb_text_column wpb_content_element ">
                                            <div className="wpb_wrapper">
                                                {paragraphs?.length &&
                                                    paragraphs.map((text, index) => {
                                                        return <p key={index}>{text}</p>
                                                    })
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="vc_empty_space  height_large hide_on_mobile"
                            style={{height: 0}}
                        />
                        <div className="vc_empty_space  height_tiny" style={{height: 0}}/>
                    </div>
                </div>
            </div>
            <div className="wpb_column vc_column_container column-2_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper"/>
                </div>
            </div>
        </RowWrapper>
    )
};