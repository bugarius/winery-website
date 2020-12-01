import React from "react";

export const RowWrapper: React.FC<{}> = ({children}) => {
    return (
        <div className="row">
            {children}
        </div>
    )
};