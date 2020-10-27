import React from "react";

interface Props
{
    children: any
}

const HomeProductsList: React.FC<Props> = ({children}) => {

    return (
        <div className="vc_column-inner ">
            <div className="wpb_wrapper">
                <div id="sc_content_1589913683"
                     className="sc_content sc_content_default home_products									">
                    <div className="sc_content_container">
                        <div className="woocommerce columns-2">
                            <ul className="products">
                                {children}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeProductsList;