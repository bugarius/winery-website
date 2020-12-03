import React from "react";

interface Props
{
    position: {
        top: string | number;
        left: string | number;
    };
    onClick?: (e: any) => void;
}

const DotComponent: React.FC<Props> = ({position: {top, left}, onClick}) => {
    return (
        <div className="hotspot-item pulse-white " style={{top: `${top}%`, left: `${left}%`, cursor: "pointer"}} onClick={onClick}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="cq-tooltip tooltipstered" style={{background: '#e19931'}}><span
                style={{background: '#ffffff'}}/></a>
        </div>
    )
};

export default DotComponent;