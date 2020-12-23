import React from "react";
import {WineList} from "../WineList";
import {ProductDetails} from "./ProductDetails";
import {useWineConcat, WineInList} from "../../../commons/shared/useWineConcat";
import {useParams} from "react-router-dom";
import wines from "../../../model/data/wines.json";
import {Wine} from "../../../model/Wine";
import wineList from "../WineList/data/wine-list.json";
import {useTranslation} from "react-i18next";
import {AppWrapper} from "../../../commons/components/wrappers/AppWrapper";

export const ProductDetailsPage = () => {
    const {t} = useTranslation();
    const {id} = useParams();

    const wineInLists = useWineConcat<WineInList>(wines as Wine[], wineList as WineList[]);
    const wine = wineInLists.find(w => w.id.toString() === id) as WineInList;

    return (
        <AppWrapper.Product title={`${wine.variety} ${wine.year}`} category={`${t(`WINE.COLOR.${wine.color}`)} ${t(`WINE.TASTE.${wine.type}`)}`}>
            <ProductDetails imgUrl={wine.imgUrl}
                            year={wine.year}
                            variety={wine.variety}
                            description={wine.description}
                            type={t(`WINE.TASTE.${wine.type}`)}
                            key={wine.id}
                            id={wine.id}
                            price={wine.price}
                            color={t(`WINE.COLOR.${wine.color}`)}
            />
        </AppWrapper.Product>
    )
};