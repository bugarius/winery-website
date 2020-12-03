import {useEffect, useState} from "react";

const usePriceDecimalSeparator = (value: string) => {

    const [number, setNumber] = useState("");
    const [decimal, setDecimal] = useState("");

    useEffect(() => {
        if (value.includes(",") || value.includes("."))
        {
            const priceArray: string[] = value.split(new RegExp("[,.]"));
            setNumber(priceArray[0]);
            setDecimal(priceArray[1])
        }
        else
        {
            setNumber(value);
        }

    }, [value])

    return [number, decimal];
};

export default usePriceDecimalSeparator;