import React from "react";

export interface PageElement
{

}

interface Props
{
    children: PageElement
}

const PageWrapper: React.FC<Props> = ({children}) => {
    return (
        <div className="body_wrap">
            <div className="page_wrap">
                {children}
            </div>
        </div>
    )
};

export default PageWrapper;