import React from "react";
import {FileUtils} from "../shared/Utils";
import Badges from "../Badges";
import {RowContent} from "../RowContent";

export const AboutVineyard = () => {

    return (
        <div className="page_content_wrap scheme_default">
            <div className="wrap">
                <RowContent icon={"icon-grape-3"}
                            title={"Winnica"}
                            subtitle={"Winnica położona jest na peryferiach Częstochowy, tuż przy północnym krańcu Jury Krakowsko-Częstochowskiej."}
                            paragraphs={[
                                "Początki winnicy sięgają 2008 roku, kiedy to posadziliśmy pierwsze sadzonki Rieslinga. W kolejnych latach sukcesywnie powiększaliśmy nasz areał o inne odmiany winorośli, takie jak Solaris, Regent czy Cabernet Cortis.",
                                "W 2020 roku nasza winnica zajmowała już  powierzchnię 2 ha."
                            ]}
                />
                <div className="row vc_column-gap-30">
                    <div className="wpb_column vc_column_container column-1_12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper"/>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container column-5_12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                                <div className="wpb_single_image wpb_content_element vc_align_left">
                                    <figure className="wpb_wrapper vc_figure">
                                        <img
                                            width={1024}
                                            height={738}
                                            src={FileUtils.getImage("winnica_bugara_2.jpg")}
                                            className="vc_single_image-img attachment-large"
                                            alt="winnica_bugara_2"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container column-5_12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                                <div
                                    className="vc_empty_space  height_large hide_on_mobile"
                                    style={{height: 0}}
                                />
                                <div className="vc_empty_space  height_large" style={{height: 0}}/>
                                <div className="wpb_single_image wpb_content_element vc_align_left">
                                    <figure className="wpb_wrapper vc_figure">
                                        <img
                                            width={1024}
                                            height={683}
                                            src={FileUtils.getImage("winnica_bugara_3.jpg")}
                                            className="vc_single_image-img attachment-large"
                                            alt="winnica_bugara_3"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container column-1_12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="wpb_column vc_column_container column-12_12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                                <div
                                    className="vc_empty_space  height_large hide_on_mobile"
                                    style={{height: 0}}
                                />
                                <div className="vc_empty_space  height_medium" style={{height: 0}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Badges/>
            <div className="row">
                <div className="wpb_column vc_column_container column-12_12 vc_col-has-fill">
                    <div className="vc_column-inner vc_custom_1464696736303">
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
        </div>
    )
};