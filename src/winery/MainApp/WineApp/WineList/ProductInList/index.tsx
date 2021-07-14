import React from "react";
import {ArrowButton} from "../../../../commons/components/ArrowButton";

interface Props
{
    id: number;
    imgUrl: string;
    year: string;
    variety: string;
    description: string;
    type: string;
    invert: boolean
}

export const ProductInList: React.FC<Props> = ({imgUrl, year, variety, description, type, invert, id}) => {
    const style = {
        backgroundColor: '#f7f7f5',
        backgroundImage: `url(${imgUrl})`,
    }
    return (
        <div
            className={"row row-o-columns-stretch row-o-equal-height" + (window.innerWidth > 768 && window.innerWidth < 1024 ? "" : " row-o-full-height ")}>
            <div className="wpb_column vc_column_container column-12_12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                        <div
                            className="sc_promo sc_promo_default sc_promo_size_large sc_promo_image_fit">
                            <div className="sc_promo_image"
                                 style={(invert ? {...style, left: 0} : {...style, right: 0})}/>
                            <div className="sc_promo_text trx_addons_stretch_height"
                                 style={{width: '50%', float: (invert ? 'right' : 'left')}}>
                                <div className="sc_promo_text_inner sc_align_center"
                                     style={{width: "100%", paddingLeft: "0", paddingRight: "0"}}>
                                    <h2 className="sc_item_title sc_promo_title">
                                        <small>{year}</small><br/>{variety}</h2>
                                    <h5 className="sc_item_subtitle sc_promo_subtitle"
                                        style={{paddingLeft: "20px", paddingRight: "20px"}}>{description}</h5>
                                    <div className="sc_promo_content sc_item_content">
                                        <div className="wpb_text_column wpb_content_element ">
                                            <div className="wpb_wrapper">
                                                <p style={{textAlign: 'center'}}>
                                                    <span
                                                        className="trx_addons_accent trx_addons_tiny_text"><strong>{type}</strong></span><br/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <ArrowButton path={`/wina/karta_win/${id}`} label={'Odkryj to wino'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};