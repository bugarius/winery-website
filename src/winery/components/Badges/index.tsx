import React from "react";
import {FileUtils} from "../shared/Utils";

const Badges = () => {
    return (
        <div className={"row row-no-padding row-o-columns-middle" + (window.innerWidth > 768 ? "" : " row-o-full-height")}>
            <div className="wpb_column vc_column_container column-12_12">
                <div className="vc_column-inner ">
                    <div className="wrap">
                        <i id="sc_anchor_awards" className="sc_anchor" title="Our awards"/>
                        <div className="vc_empty_space  height_medium" style={{height: '0px'}}/>
                        <div className="sc_icons sc_icons_default sc_icons_size_medium sc_align_center">
                            <div
                                className="sc_icons_columns sc_item_columns trx_addons_columns_wrap columns_padding_bottom">
                                <div className="trx_addons_column-1_3">
                                    <div className="sc_icons_item sc_icons_item_linked">
                                        <div className="sc_icons_image"><img src={FileUtils.getImage("icon-01.png")} alt="" width={276}
                                                                             height={276}/></div>
                                        <h4 className="sc_icons_title"><span>Nagrody</span></h4>
                                        <div className="sc_icons_description"><span>Nasze wina zdobywają nagrody na polskich i międzynarodowych konkursach winiarskich</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="trx_addons_column-1_3">
                                    <div className="sc_icons_item sc_icons_item_linked">
                                        <div className="sc_icons_image"><img src={FileUtils.getImage("icon-02.png")} alt="" width={276}
                                                                             height={276}/></div>
                                        <h4 className="sc_icons_title"><span>Nasz sklep</span></h4>
                                        <div className="sc_icons_description"><span>Wina możesz zakupić w sklepie tuż przy naszej winnicy</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="trx_addons_column-1_3">
                                    <div className="sc_icons_item sc_icons_item_linked">
                                        <div className="sc_icons_image"><img src={FileUtils.getImage("icon-03.png")} alt="" width={276}
                                                                             height={276}/></div>
                                        <h4 className="sc_icons_title"><span>Degustacje i zwiedzanie</span></h4>
                                        <div className="sc_icons_description"><span>Serdecznie zapraszamy do odwiedzenia naszej winnicy i winiarni</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vc_empty_space  height_medium" style={{height: '0px'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Badges;