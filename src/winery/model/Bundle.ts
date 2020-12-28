import {Wine} from "./Wine";

export interface Bundle
{
    id: string;
    name: string;
    years: string;
    image: string;
    detailsImage: string;
    alt: string;
    wines: Partial<Wine[]>;
    boxPrice: number;
    price: number;
    productLink: string;
    description: string;
    available: boolean;
}