import React, {FC} from "react";
import usePriceDecimalSeparator from "../../../../commons/shared/usePriceDecimalsSeperator";
import {useTranslation} from "react-i18next";

export const Price: FC<{ amount: number, available?: boolean }> = ({amount, available}) => {
    const [number, decimal] = usePriceDecimalSeparator(amount);
    const {t} = useTranslation();

    return (
        <div>
            <p className="price">
                {available === undefined || available ?
                    <span className="woocommerce-Price-amount amount" style={{color: "orange"}}>
                                          <span className="woocommerce-Price-currencySymbol"/>{number}
                        {decimal && <span className="decimals">{decimal}</span>} zł
                                        </span>
                    :
                    <span className={"vc_message_box-outline vc_color-juicy_pink"}>{t("MESSAGE.PRODUCT_UNAVAILABLE")}</span>
                }
            </p>
        </div>
    )
};