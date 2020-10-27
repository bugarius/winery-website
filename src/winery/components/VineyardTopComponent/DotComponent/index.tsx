import React from "react";

interface Props
{
    position: {
        top: string | number;
        left: string | number;
    }
}

const DotComponent: React.FC<Props> = ({position: {top, left}}) => {
    return (
        <div className="hotspot-item pulse-white " style={{top: `${top}%`, left: `${left}%`}}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="cq-tooltip tooltipstered" style={{background: '#e19931'}}><span
                style={{background: '#ffffff'}}/></a>
        </div>
    )
};

export default DotComponent;