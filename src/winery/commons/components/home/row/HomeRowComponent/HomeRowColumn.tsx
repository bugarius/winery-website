import React, {FC} from "react";

interface Props
{
    children: any;
}

export const HomeRowColumn: FC<Props> = ({children}) => {
    return (
        <div className="wpb_column vc_column_container column-6_12">
            {children}
        </div>
    )
}