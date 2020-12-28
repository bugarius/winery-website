import React, {FC, Ref} from "react";

interface Props
{
    refTarget: Ref<any>;
    children: any;
}

export const HomeRow: FC<Props> = ({refTarget, children}) => {
    return (
        <div ref={refTarget}
             className={"row row-no-padding row-o-columns-middle" + (window.innerWidth > 768 && window.innerWidth < 1024 ? "" : " row-o-full-height")}>
            {children}
        </div>
    )
}