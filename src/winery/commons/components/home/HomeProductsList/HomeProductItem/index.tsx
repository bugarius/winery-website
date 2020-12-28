import React from "react";
import {NavLink} from "react-router-dom";
import {FileUtils} from "../../../../shared/Utils";
import {Price} from "../../../../../MainApp/WineApp/ProductDetailsPage/ProductDetails/Price";

export interface HomeProductItem
{
    imgUrl: string,
    name: string,
    productLink: string,
    addToCardLink: string,
    badge?: boolean | string
    alt?: string;
    price: number;
    year: string;
}

const HomeProductItem: React.FC<HomeProductItem> = ({imgUrl, name, badge, alt, addToCardLink, productLink, price, year}) => {

    return (
        <li className="product has-post-thumbnail first">
            <div className="post_item post_layout_thumbs">
                <div className="post_featured hover_shop">
                    <a href="product.html">
                        <img width={360} height={480}
                             src={FileUtils.getImage(imgUrl)}
                             alt={alt}
                             title={name}/> </a>
                    <div className="mask"/>
                    <div className="icons">
                        <NavLink to={"/"} onClick={event => event.preventDefault()} style={{visibility: "hidden"}}>
                            <div aria-hidden="true" className="shop_cart icon-shopping-cart"/>
                        </NavLink>
                        <NavLink to={productLink}>
                            <div aria-hidden="true" className="shop_link icon-link"/>
                        </NavLink>
                        {badge && <div className="product_awards"><span style={{fontSize: "10px"}}>{badge}</span></div>}
                    </div>
                </div>
                <div className="post_data" style={{display: "block"}}>
                    <div className="post_header entry-header">
                        <div className="post_tags product_tags">{year}</div>
                        <h3><a href="product.html">{name}</a></h3>
                    </div>
                    <Price amount={price}/>
                    {/*<a rel="nofollow" href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Buy now</a>*/}
                </div>
            </div>
        </li>
    )
};

export default HomeProductItem;