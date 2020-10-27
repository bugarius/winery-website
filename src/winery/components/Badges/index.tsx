import React from "react";

const Badges = () => {
    return (
        <div className="row row-no-padding row-o-full-height row-o-columns-middle">
            <div className="wpb_column vc_column_container column-12_12">
                <div className="vc_column-inner ">
                    <div className="wrap">
                        <a id="sc_anchor_awards" className="sc_anchor" title="Our awards" data-icon data-url/>
                        <div className="vc_empty_space  height_medium" style={{height: '0px'}}/>
                        <div className="sc_icons sc_icons_default sc_icons_size_medium sc_align_center">
                            <div
                                className="sc_icons_columns sc_item_columns trx_addons_columns_wrap columns_padding_bottom">
                                <div className="trx_addons_column-1_3">
                                    <div className="sc_icons_item sc_icons_item_linked">
                                        <div className="sc_icons_image"><img src="images/icon-01.png" alt="" width={276}
                                                                             height={276}/></div>
                                        <h4 className="sc_icons_title"><span>Awards</span></h4>
                                        <div className="sc_icons_description"><span>We make wine with a thought of our customers, therefore the team...</span>
                                        </div>
                                        <a href="#" className="sc_icons_link"/>
                                    </div>
                                </div>
                                <div className="trx_addons_column-1_3">
                                    <div className="sc_icons_item sc_icons_item_linked">
                                        <div className="sc_icons_image"><img src="images/icon-02.png" alt="" width={276}
                                                                             height={276}/></div>
                                        <h4 className="sc_icons_title"><span>Our Store</span></h4>
                                        <div className="sc_icons_description"><span>Integer egestas ipsum ut mi convallis lacinia pellentesque vitae lectus.</span>
                                        </div>
                                        <a href="#" className="sc_icons_link"/>
                                    </div>
                                </div>
                                <div className="trx_addons_column-1_3">
                                    <div className="sc_icons_item sc_icons_item_linked">
                                        <div className="sc_icons_image"><img src="images/icon-03.png" alt="" width={276}
                                                                             height={276}/></div>
                                        <h4 className="sc_icons_title"><span>Royal Wine Club</span></h4>
                                        <div className="sc_icons_description"><span>Etiam laoreet, arcu ut imperdiet facilisis, nunc tellus consequat nis...</span>
                                        </div>
                                        <a href="#" className="sc_icons_link"/>
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