import React from "react";
import {NavLink} from "react-router-dom";
import {FileUtils} from "../../../../shared/Utils";
import {Price} from "../../../../../MainApp/WineApp/ProductDetailsPage/ProductDetails/Price";
import {useResponsiveContext} from "../../../../../MainApp/HomeApp/ResponsiveContext";

export interface HomeProductItem
{
    imgUrl: string,
    name: string,
    name2?: string,
    productLink: string,
    addToCardLink: string,
    badge?: boolean | string
    alt?: string;
    price: number;
    year: string;
}

const HomeProductItem: React.FC<HomeProductItem> = ({
                                                        imgUrl,
                                                        name,
                                                        name2,
                                                        badge,
                                                        alt,
                                                        addToCardLink,
                                                        productLink,
                                                        price,
                                                        year
                                                    }) => {

    const mobileStyle = {width: "100%", fontSize: "8px"};
    const desktopStyle = {fontSize: "10px"}
    const {isMobile} = useResponsiveContext();

    return (
        <li className="product has-post-thumbnail first">
            <div className="post_item post_layout_thumbs">
                <div className="post_featured hover_shop">
                    <NavLink to={""}>
                        <img width={360} height={480}
                             src={FileUtils.getImage(imgUrl)}
                             alt={alt}
                             title={name}/>
                    </NavLink>
                    <div className="mask"/>
                    <div className="icons">
                        <NavLink to={"/"} onClick={event => event.preventDefault()} style={{visibility: "hidden"}}>
                            <div aria-hidden="true" className="shop_cart icon-shopping-cart"/>
                        </NavLink>
                        <NavLink to={productLink}>
                            <div aria-hidden="true" className="shop_link icon-link"/>
                        </NavLink>
                        {badge && <div className="product_awards"><span style={isMobile ? mobileStyle : desktopStyle}>{badge}</span></div>}
                    </div>
                </div>
                <div className="post_data" style={{display: "block"}}>
                    <div className="post_header entry-header">
                        <div className="post_tags product_tags">{year}</div>
                        <h2 className={"sc_testimonials_item_author_title"}>{name}</h2>
                        <h3 className="post_tags product_tags">{name2}</h3>
                    </div>
                    <Price amount={price}/>
                    {/*<a rel="nofollow" href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Buy now</a>*/}
                </div>
            </div>
        </li>
    )
};

export default HomeProductItem;