import React from "react";
import {ProductDetails} from "./ProductDetails";
import {useParams} from "react-router-dom";
import wines from "../../../model/data/wines.json";
import {Wine} from "../../../model/Wine";
import {useTranslation} from "react-i18next";
import {AppWrapper} from "../../../commons/components/wrappers/AppWrapper";

export const ProductDetailsPage = () => {
    const {t} = useTranslation();
    const {id} = useParams();

    const wine = wines.find(w => w.id.toString() === id) as Wine;

    return (
        <AppWrapper.Product title={`${wine.variety} ${wine.year}`} category={`${t(`WINE.COLOR.${wine.color}`)} ${t(`WINE.TASTE.${wine.type}`)}`}>
            <ProductDetails imgUrl={wine.detailsImage}
                            year={wine.year}
                            variety={wine.variety}
                            description={wine.description}
                            type={t(`WINE.TASTE.${wine.type}`)}
                            key={wine.id}
                            id={wine.id}
                            price={wine.price}
                            color={t(`WINE.COLOR.${wine.color}`)}
                            available={wine.available}
            />
        </AppWrapper.Product>
    )
};