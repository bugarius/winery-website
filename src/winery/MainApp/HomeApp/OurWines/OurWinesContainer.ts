import React, {useEffect, useState} from "react";
import winesDescription from "./data/our-wines-description.json"
import {ListUtils} from "../../../commons/shared/Utils";
import {Wine} from "../../../model/Wine";
import winesData from "../../../model/data/wines.json"
import {useTranslation} from "react-i18next";

export interface ShopWine
{
    id: number;
    name: string;
    alt: string;
    productLink: string;
    badge?: string;
    shopImage: string;
    variety: string;
    year: string;
    price: number;
}

export interface Description
{
    title: string;
    subtitle: string;
    text: string;
}

interface Props
{
    render: (wines: Wine[], description: Description) => JSX.Element;
}

const OurWinesContainer: React.FC<Props> = ({render}) => {

    const {t} = useTranslation();

    const description = winesDescription as Description;

    const [randomWines, setRandomWines] = useState<Wine[]>([]);

    const allWines = winesData.filter(wine => wine.available).map(wine => ({...wine, name: `${t("WINE.COLOR." + wine.color)} ${t("WINE.TASTE." + wine.type)}`}));

    useEffect(() => {
        if (!randomWines?.length)
        {
            const getRandomNumbers = (wines: Wine[]) => {
                const result: number[] = [];
                while (result.length < 4)
                {
                    const newNumber = Math.floor(Math.random() * allWines.length);
                    if (!result.some(number => number === wines[newNumber]?.id))
                    {
                        result.push(wines[newNumber]?.id);
                    }
                }
                return result;
            }

            const getRandomWines = (wines: Wine[]) => {
                const randomNumbers = getRandomNumbers(wines);
                return ListUtils.getListById(wines, randomNumbers) as Wine[];
            };

            setRandomWines(getRandomWines(allWines as Wine[]));
        }
    }, [setRandomWines, randomWines, allWines])


    return render(randomWines, description)
};

export default OurWinesContainer;