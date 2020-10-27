import React from "react";
import wineList from "./data/wine-list.json"
import wines from "../../model/data/wines.json"
import {ProductInList} from "./ProductInList";
import {Wine} from "../../model/Wine";
import {useWineConcat, WineInList} from "../shared/useWineConcat";
import {useTranslation} from "react-i18next";
import {FileUtils} from "../shared/Utils";

export type WineList =
{
    id: number;
    imgUrl: string;
    description: string;
}

export const WineList = () => {

    const {t} = useTranslation();

    const wineInLists = useWineConcat<WineInList>(wines as Wine[], wineList as WineList[]);

    return (
        <>
            {
                wineInLists?.map(wine => {
                    return <ProductInList imgUrl={FileUtils.getImage(wine.imgUrl)}
                                          year={wine.year}
                                          variety={wine.variety}
                                          description={wine.description}
                                          type={t(`WINE.TASTE.${wine.type}`)}
                                          key={wine.id}
                                          invert={wine.id % 2 === 0}
                                          id={wine.id}
                    />
                })
            }
        </>
    )
};