import React from "react";
import ourWinesList from "./data/our-wines.json"
import wines from "../../model/data/wines.json"
import winesDescription from "./data/our-wines-description.json"
import {OurWineInList, useWineConcat} from "../shared/useWineConcat";
import {Wine} from "../../model/Wine";

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
    const ourWines: OurWineInList[] = useWineConcat<OurWineInList>(wines as Wine[], ourWinesList as OurWine[]);
    const description = winesDescription as Description;

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
        return wines.filter(wine => randomNumbers.some(number => number === wine.id));
    };

    const randomWines = getRandomWines(ourWines);

    return render(randomWines, description)
};

export default OurWinesContainer;