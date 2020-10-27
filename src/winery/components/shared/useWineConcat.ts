import {Wine} from "../../model/Wine";
import {WineList} from "../WineList";
import {OurWine} from "../OurWines/OurWinesContainer";

type WineInArray = Wine | WineList | OurWine
export type WineInList = Wine & WineList;
export type OurWineInList = Wine & OurWine;
type ResultList = WineInList | OurWineInList

export const useWineConcat = <T extends ResultList>(firstArray: Wine[], secondArray: WineInArray[]): T[] => {
    return firstArray.map(wine => {
        const wineInList: WineInArray = secondArray.filter(wl => wl.id === wine.id)[0];
        return {...wine, ...wineInList} as T;
    })
};