export enum WineType
{
    DRY = "DRY",
    SEMI_DRY = "SEMI_DRY",
    SEMI_SWEET = "SEMI_SWEET",
    SWEET = "SWEET"
}

export enum WineColor
{
    RED = "RED,",
    WHITE = "WHITE",
    ROSE = "ROSE",
    ORANGE = "ORANGE"
}

export interface Wine
{
    id: number;
    name: string;
    variety: string;
    year: string;
    type: WineType;
    color: WineColor;
    price: number;
    shopImage: string;
    alt: string;
    productLink: string;
    badge: string;
    detailsImage: string;
    description: string;
    available: boolean;
}