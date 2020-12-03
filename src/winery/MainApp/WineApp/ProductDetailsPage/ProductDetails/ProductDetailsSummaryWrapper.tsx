import React, {FC} from "react";

export const ProductDetailsSummaryWrapper: FC<{}> = ({children}) => {
  return (
      <div className="summary entry-summary">
          {children}
      </div>
  )
};