import React from "react";
import {ProductDetailsWrapper} from "./ProductDetailsWrapper";
import {ProductDetailsImage} from "./ProductDetailsImage";
import {ProductDetailsSummaryWrapper} from "./ProductDetailsSummaryWrapper";
import {Price} from "./Price";
import {ProductDetailsDescription} from "./ProductDetailsDescription";
import {WineColor} from "../../../../model/Wine";
import {FileUtils} from "../../../../commons/shared/Utils";

interface Props
{
    imgUrl: string;
    year: string;
    variety?: string;
    description: string;
    type?: string;
    id: number | string;
    price: number;
    color?: WineColor;
    available: boolean;
    category?: string;
}

export const ProductDetails: React.FC<Props> = ({
                                                    imgUrl,
                                                    year,
                                                    variety,
                                                    description,
                                                    type,
                                                    id,
                                                    price,
                                                    color,
                                                    available,
                                                    category}) => {

    // const handleAddToCart = (quantity: number) => {
    //     console.log(`wine id: ${id}, quantity: ${quantity}`)
    // };

    return (
        <ProductDetailsWrapper>
            <ProductDetailsImage src={FileUtils.getImage(imgUrl)} alt={variety} />
            <ProductDetailsSummaryWrapper>
                <Price amount={price} available={available}/>
                <ProductDetailsDescription description={description} />
                {/*<AddToCart addToCart={handleAddToCart}/>*/}
                <div className="product_meta">
                    <span className="posted_in">
                        Kategoria:{" "}<span
                        style={{color: "orange", fontWeight: "bold"}}>{category ? category : `${color}, ${type}`}</span>
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