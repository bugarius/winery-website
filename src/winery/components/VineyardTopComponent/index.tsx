import React from "react";
import DotComponent from "./DotComponent";
import {FileUtils} from "../shared/Utils";
import "../../../css/custom.css"

const VineyardTopComponent: React.FC<{showDots?: boolean}> = ({showDots}) => {
    return (
        <div className="row row-no-padding vc_custom_1469089433188 row-o-full-height row-o-columns-middle" style={{minHeight: "100vh"}}>
            <div className="wpb_column vc_column_container column-3_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper" style={{display: (showDots ? "block" : "none")}}>
                        <div style={{width: ''}} className="cqtooltip-wrapper hide_on_mobile"><img
                            src="/images/spacer.png" alt=""/>
                            <div className="cq-hotspots">
                                <DotComponent position={{top: 60, left: 20}}/>
                                <DotComponent position={{top: 80, left: 90}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpb_column vc_column_container column-6_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                        <div className="vc_empty_space  height_huge" style={{height: '0px'}}/>
                        <div className="vc_empty_space  height_huge" style={{height: '0px'}}/>
                        <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1469087371560">
                            <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <img width={520}
                                         height={120}
                                         src={FileUtils.getImage("bugara.png")}
                                         className="vc_single_image-img attachment-full"
                                         alt="bugara"/></div>
                            </figure>
                        </div>
                        <div className="vc_empty_space  height_medium" style={{height: '0px'}}/>
                        <div className="wpb_text_column wpb_content_element  vc_custom_1469087355036">
                            <div className="wpb_wrapper">
                                <p style={{
                                    textAlign: 'center',
                                    fontSize: '0.8421em',
                                    letterSpacing: '2px',
                                    lineHeight: '1.75em'
                                }}><strong><span style={{color: '#ffffff'}}>RODZINNA PRODUKCJA NAJWYŻSZEJ JAKOŚCI WIN Z WŁASNYCH UPRAW Z WINNICY POŁOŻONEJ W CZĘSTOCHOWIE.</span></strong>
                                </p>
                            </div>
                        </div>
                        <div className="vc_empty_space  height_huge" style={{height: '0px'}}/>
                        <div className="vc_empty_space  height_huge" style={{height: '0px'}}/>
                    </div>
                </div>
            </div>
            <div className="wpb_column vc_column_container column-3_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper" style={{display: (showDots ? "block" : "none")}}>
                        <div style={{width: ''}} className="cqtooltip-wrapper hide_on_mobile"><img
                            src="images/spacer.png" alt=""/>
                            <div className="cq-hotspots">
                                <DotComponent position={{top: 35, left: 10}}/>
                                <DotComponent position={{top: 60, left: 65}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Do popupów z winami*/}
            {/*<div className="tooltipster-base tooltipster-light tooltipster-grow tooltipster-grow-show tooltipster-dying" style={{maxWidth: '210px', pointerEvents: 'auto', transitionDuration: '300ms', animationDuration: '300ms', top: '26px', left: '797px'}}><div className="tooltipster-content">*/}
            {/*    <div className="wpb_single_image wpb_content_element vc_align_center">*/}
            {/*        <figure className="wpb_wrapper vc_figure">*/}
            {/*            <div className="vc_single_image-wrapper   vc_box_border_grey"><img className="vc_single_image-img " src="images/wine-01-210x230.jpg" width={210} height={230} alt="wine-01" title="wine-01" /></div>*/}
            {/*        </figure>*/}
            {/*    </div>*/}
            {/*    <div className="wpb_text_column wpb_content_element  scheme_dark">*/}
            {/*        <div className="wpb_wrapper">*/}
            {/*            <p style={{textAlign: 'center'}}>*/}
            {/*                <span className="trx_addons_dark"><a href="product.html">Classic Shardonnay</a></span><br />*/}
            {/*                <span className="trx_addons_accent trx_addons_tiny_text">2014</span><br />*/}
            {/*                <span className="trx_addons_dark trx_addons_tiny_text"><a href="product.html">See Details</a></span>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div><div className="tooltipster-arrow-top tooltipster-arrow" style={{left: '19px'}}><span style={{borderColor: 'rgb(237, 237, 237)'}} /></div></div>*/}
        </div>
    )
}

export default VineyardTopComponent;