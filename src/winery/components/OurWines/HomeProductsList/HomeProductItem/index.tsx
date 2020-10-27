import React from "react";
import {NavLink} from "react-router-dom";

export interface HomeProductItem
{
    imgUrl: string,
    name: string,
    productLink: string,
    addToCardLink: string,
    badge?: boolean | string
}

const HomeProductItem: React.FC<HomeProductItem> = ({imgUrl, name, productLink, addToCardLink, badge}) => {

    return (
        <li className="post-403 product type-product has-post-thumbnail product_cat-red-wines product_tag-55 first instock shipping-taxable purchasable product-type-simple">
            <div className="post_item post_layout_thumbs">
                <div className="post_featured hover_shop">
                    <a href="product.html">
                        <img width={360} height={480}
                             src={imgUrl}
                             alt={name}
                             title={name}/> </a>
                    <div className="mask"/>
                    <div className="icons">
                        {/*<NavLink to={"/"} onClick={event => event.preventDefault()} style={{display: "none"}}>*/}
                        {/*    <div aria-hidden="true" className="shop_cart icon-shopping-cart"/>*/}
                        {/*</NavLink>*/}
                        <NavLink to={productLink}>
                            <div aria-hidden="true" className="shop_link icon-link"/>
                        </NavLink>
                        {badge && <div className="product_awards"><span style={{fontSize: "10px"}}>{typeof badge === "boolean" ? "Zdobywca NAGRODY" : badge}</span></div>}
                    </div>
                </div>
                {/*<div className="post_data">*/}
                {/*    <div className="post_header entry-header">*/}
                {/*        <div className="post_tags product_tags"><a href="product.html"*/}
                {/*                                                   rel="tag">2011</a>*/}
                {/*        </div>*/}
                {/*        <h3><a href="product.html">1837. Cabernet Merlot</a></h3>*/}
                {/*        <div className="star-rating" title="Rated 5 out of 5"><span*/}
                {/*            style={{width: '100%'}}><strong*/}
                {/*            className="rating">5</strong> out of 5</span></div>*/}
                {/*    </div>*/}
                {/*    <span className="price"><span*/}
                {/*        className="woocommerce-Price-amount amount"><span*/}
                {/*        className="woocommerce-Price-currencySymbol">$</span>300<span*/}
                {/*        className="decimals">50</span></span>*/}
                {/*                          </span>*/}
                {/*    <a rel="nofollow" href="#" data-quantity={1} data-product_id={403}*/}
                {/*       data-product_sku*/}
                {/*       className="button product_type_simple add_to_cart_button ajax_add_to_cart">Buy*/}
                {/*        now</a></div>*/}
            </div>
        </li>
    )
};

export default HomeProductItem;