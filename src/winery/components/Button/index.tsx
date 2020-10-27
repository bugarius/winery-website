import React, {FC, MouseEvent} from "react";

export const Button: FC<{ children?: string, addToCart?: boolean, onClick: (event: MouseEvent<HTMLButtonElement>) => void }> = ({children, addToCart, onClick}) => {
    if (addToCart)
    {
        return (
            <button
                onClick={onClick}
                className="single_add_to_cart_button button alt"
                style={{backgroundColor: "orange"}}>
                {children || "Dodaj do koszyka"}
            </button>
        )
    }
    else
    {
        return (
            <button>
                {children}
            </button>
        )
    }
};