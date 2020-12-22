import {useEffect, useState} from "react";

const usePriceDecimalSeparator = (value: number) => {

    const stringValue = value.toString();
    const [number, setNumber] = useState("");
    const [decimal, setDecimal] = useState("");

    useEffect(() => {
        if (stringValue.includes(",") || stringValue.includes("."))
        {
            const priceArray: string[] = stringValue.split(new RegExp("[,.]"));
            setNumber(priceArray[0]);
            setDecimal(priceArray[1])
        }
        else
        {
            setNumber(stringValue);
        }

    }, [stringValue])

    return [number, decimal];
};

export default usePriceDecimalSeparator;