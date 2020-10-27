import React, {FC, MouseEvent} from "react";
import {Button} from "../../Button";
import {useQuantityStepper} from "../../shared/useQuantityStepper";
import {useTranslation} from "react-i18next";

export const AddToCart: FC<{addToCart: (quantity: number) => void}> = ({addToCart}) => {

    const {quantity, increment, decrement} = useQuantityStepper();
    const {t} = useTranslation();

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addToCart(quantity);
    };

    return (
        <form className="cart">
            <div className="quantity">
                <input
                    type="number"
                    name="quantity"
                    defaultValue={quantity}
                    title={t("COMMON_WORDS.QUANTITY")}
                    className="input-text qty text"
                    key={quantity}
                    disabled
                />
                <span className="q_inc" onClick={() => increment()}/>
                <span className="q_dec" onClick={() => decrement()}/>
            </div>
            <input type="hidden" name="add-to-cart" defaultValue={403}/>
            <Button addToCart onClick={handleOnClick}/>
        </form>
    )
};