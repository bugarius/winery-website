import React from "react";
import {ProductDetailsWrapper} from "./ProductDetailsWrapper";
import {ProductDetailsImage} from "./ProductDetailsImage";
import {ProductDetailsSummaryWrapper} from "./ProductDetailsSummaryWrapper";
import {Price} from "./Price";
import {ProductDetailsDescription} from "./ProductDetailsDescription";
import {WineColor} from "../../../model/Wine";

interface Props
{
    imgUrl: string;
    year: string;
    variety: string;
    description: string;
    type: string;
    invert: boolean;
    id: number;
    price: string;
    color: WineColor;
}

export const ProductDetails: React.FC<Props> = ({imgUrl, year, variety, description, type, invert, id, price, color}) => {

    // const handleAddToCart = (quantity: number) => {
    //     console.log(`wine id: ${id}, quantity: ${quantity}`)
    // };

    return (
        <ProductDetailsWrapper>
            <ProductDetailsImage src={imgUrl} alt={variety} />
            <ProductDetailsSummaryWrapper>
                <Price amount={price}/>
                <ProductDetailsDescription description={description} />
                {/*<AddToCart addToCart={handleAddToCart}/>*/}
                <div className="product_meta">
                    <span className="posted_in">
                        Kategoria:{" "}<span
                        style={{color: "orange", fontWeight: "bold"}}>{color}, {type}</span>
                    </span>
                    <span className="tagged_as">
                        Rok:{" "}<span style={{color: "orange", fontWeight: "bold"}}>{year}</span>
                    </span>
                    <span className="product_id">ID produktu: <span>{id}</span></span>
                </div>
            </ProductDetailsSummaryWrapper>
        </ProductDetailsWrapper>

    )
};