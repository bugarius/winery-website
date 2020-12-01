import React, {FC} from "react";
import {FileUtils} from "../../shared/Utils";

export const GMMarker: FC<{lat: any, lng: any}> = () => {
    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)'
        }}>
            <img src={FileUtils.getImage("googlemap_marker.png")} alt={""}/>
        </div>
    )
};