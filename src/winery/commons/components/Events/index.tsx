import React from "react";

const Events = () => {
    return (
        <div className="row row-no-padding row-o-full-height row-o-columns-stretch row-o-equal-height">
            <div className="wpb_column vc_column_container column-6_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                        <div id="sc_content_2046722897"
                             className="sc_content sc_content_default sc_padding_large			">
                            <div className="sc_content_container">
                                <div className="sc_events sc_events_detailed" data-slides-min-width={150}>
                                    <h2 className="sc_item_title sc_events_title">Events</h2>
                                    <div className="sc_events_content sc_item_content"><a href="event.html"
                                                                                          className="sc_events_item"><span
                                        className="sc_events_item_date_wrap"><span className="sc_events_item_date">Mar. 21</span></span><span
                                        className="sc_events_item_title_wrap"><span className="sc_events_item_title">Presentation ‘Winemaking Is An Art’</span></span><span
                                        className="sc_events_item_time_wrap"><span className="sc_events_item_time">10:00 AM</span></span><span
                                        className="sc_events_item_button_wrap"><span
                                        className="sc_events_item_button">Details</span></span></a><a href="event.html"
                                                                                                      className="sc_events_item"><span
                                        className="sc_events_item_date_wrap"><span className="sc_events_item_date">Feb. 12</span></span><span
                                        className="sc_events_item_title_wrap"><span
                                        className="sc_events_item_title">Wine &amp; Cheese Lunch</span></span><span
                                        className="sc_events_item_time_wrap"><span className="sc_events_item_time">12:15 AM</span></span><span
                                        className="sc_events_item_button_wrap"><span
                                        className="sc_events_item_button">Details</span></span></a></div>
                                    <div className="sc_item_button sc_events_button sc_button_wrap"><a
                                        href="events.html"
                                        className="sc_button sc_button_simple sc_button_size_normal sc_button_icon_top"><span
                                        className="sc_button_icon"><span className="icon-down-big"/></span><span
                                        className="sc_button_text"><span
                                        className="sc_button_title">All Events</span></span> </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpb_column vc_column_container column-6_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                        <a id="sc_anchor_events" className="sc_anchor" title="Events" data-icon data-url/>
                        <div className="sc_action sc_action_event" data-slides-min-width={250}>
                            <div className="sc_action_content sc_item_content">
                                <div
                                    className="sc_action_item sc_action_item_event with_image trx_addons_stretch_height"
                                    style={{backgroundImage: 'url(images/image-20.jpg)'}}>
                                    <div className="sc_action_item_mask"/>
                                    <div className="sc_action_item_inner">
                                        <div className="sc_action_item_image"><img src="images/glass.png" alt=""
                                                                                   width={112} height={262}/></div>
                                        <h6 className="sc_action_item_subtitle"><span>Spring Hill</span></h6>
                                        <h2 className="sc_action_item_title"><span>Wine Festival</span></h2>
                                        <div className="sc_action_item_date">Saturday, May 7, 2016</div>
                                        <div className="sc_action_item_description">
                                            <span>Historic Oaklawn Plantation</span><span/><span><b>6-9 PM</b></span>
                                        </div>
                                        <div className="sc_action_item_info"><span>33335 Denning Lane, Spring Hill * Tel. 800 1235 65 98 * facebook: Spring Hill</span>
                                        </div>
                                    </div>
                                    <a href="event.html" className="sc_action_item_link sc_action_item_link_over"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Events;