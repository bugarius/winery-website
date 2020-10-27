import React, {FC} from "react";
import usePriceDecimalSeparator from "../../shared/usePriceDecimalsSeperator";

export const Price: FC<{amount: string}> = ({amount}) => {
    const [number, decimal] = usePriceDecimalSeparator(amount);
  return (
      <div>
          <p className="price">
                                        <span className="woocommerce-Price-amount amount" style={{color: "orange"}}>
                                          <span className="woocommerce-Price-currencySymbol"/>{number}
                                            {decimal && <span className="decimals">{decimal}</span>} zł
                                        </span>
          </p>
      </div>
  )
};