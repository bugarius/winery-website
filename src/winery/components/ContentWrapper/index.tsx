import React from "react";

export interface ContentElement
{

}

interface Props
{
    children: ContentElement
}

const ContentWrapper: React.FC<Props> = ({children}) => {
    return (
        <div className="page_content_wrap scheme_default">
            <div className="content_wrap">
                <div className="content">
                    <article id="post-691" className="post_item_single post_type_page post-691 page type-page">
                        <div className="post_content entry-content">
                            {children}
                            <div className="row wpb_row row-fluid" id="footer_menu">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner vc_custom_1466156080949">
                                        <div className="wpb_wrapper">
                                            <i id="sc_anchor_footer_menu" className="sc_anchor"
                                               title="Footer menu"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
};

export default ContentWrapper;