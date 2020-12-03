import {useState} from "react";

interface QuantityStepper {
    quantity: number;
    increment: () => void;
    decrement: () => void;
}

export const useQuantityStepper = (): QuantityStepper => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return {quantity, increment, decrement}
};