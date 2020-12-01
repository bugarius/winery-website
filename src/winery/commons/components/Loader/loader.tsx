import React, {FC} from "react";

export const Loader: FC<{ loading: boolean, children: any }> = ({children, loading}) => {
    const overlay =
        <div className={'overlay'}>
            <div className="lds-dual-ring"/>
        </div>
    return (
        <div className={"spinner-container"}>
            {children}
            {loading && overlay}
        </div>
    );
};