import React from "react";

export const CommonWrapper: React.FC<{}> = ({children}) => {
    return (
        <div className="wrap">
            {children}
        </div>
    )
};