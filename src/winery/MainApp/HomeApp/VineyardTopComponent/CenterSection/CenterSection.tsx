import React from "react";
import {FileUtils} from "../../../../commons/shared/Utils";

interface Props
{
    image?: string;
    text?: string;
}

export const CenterSection: React.FC<Props> = ({image, text}) => {

    return (
        <div className="wpb_column vc_column_container column-6_12">
            <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                    <div className="vc_empty_space  height_huge" style={{height: '0px'}}/>
                    <div className="vc_empty_space  height_huge" style={{height: '0px'}}/>
                    <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1469087371560">
                        <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                                {image &&
                                    <img width={520}
                                         height={120}
                                         src={FileUtils.getImage(image)}
                                         className="vc_single_image-img attachment-full"
                                         alt={image}/>
                                }
                            </div>
                        </figure>
                    </div>
                    <div className="vc_empty_space  height_medium" style={{height: '0px'}}/>
                    <div className="wpb_text_column wpb_content_element  vc_custom_1469087355036">
                        <div className="wpb_wrapper">
                            <p style={{
                                textAlign: 'center',
                                fontSize: '1.6em',
                                letterSpacing: '2px',
                                lineHeight: '1.75em'
                            }}><strong><span style={{color: '#ffffff'}}>{text}</span></strong>
                            </p>
                        </div>
                    </div>
                    <div className="vc_empty_space  height_huge" style={{height: '0px'}}/>
                    <div className="vc_empty_space  height_huge" style={{height: '0px'}}/>
                </div>
            </div>
        </div>
    )
}