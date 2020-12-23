import {Wine} from "./Wine";

export interface Bundle
{
    id: number;
    name: string;
    years: string;
    image: string;
    alt: string;
    wines: Partial<Wine[]>;
    boxPrice: number;
    price: number;
    productLink: string;
    description: string;
}