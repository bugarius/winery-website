import React, {useEffect, useState} from "react";
import ourWines from "./data/our-wines.json"
import winesDescription from "./data/our-wines-description.json"
import {ListUtils} from "../../../commons/shared/Utils";

export interface OurWine
{
    id: number;
    name: string;
    productLink: string;
    badge?: string;
    imgUrl: string;
}

export interface Description
{
    title: string;
    subtitle: string;
    text: string;
}

interface Props
{
    render: (wines: OurWine[], description: Description) => JSX.Element;
}

const OurWinesContainer: React.FC<Props> = ({render}) => {
    const description = winesDescription as Description;

    const [randomWines, setRandomWines] = useState<OurWine[]>([]);

    useEffect(() => {
        if (!randomWines?.length)
        {
            const getRandomNumbers = (wines: OurWine[]) => {
                const result: number[] = [];
                while (result.length < 4)
                {
                    const newNumber = Math.floor(Math.random() * ourWines.length);
                    if (!result.some(number => number === wines[newNumber]?.id))
                    {
                        result.push(wines[newNumber]?.id);
                    }
                }
                return result;
            }

            const getRandomWines = (wines: OurWine[]) => {
                const randomNumbers = getRandomNumbers(wines);
                return ListUtils.getListById(wines, randomNumbers) as OurWine[];
            };

            setRandomWines(getRandomWines(ourWines as OurWine[]));
        }
    }, [setRandomWines, randomWines])


    return render(randomWines, description)
};

export default OurWinesContainer;