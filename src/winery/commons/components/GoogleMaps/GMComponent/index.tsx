import React, {FC} from "react";
import GoogleMapReact from 'google-map-react';
import {GMMarker} from "../GMMarker";

interface Props
{
    zoom: number;
    initialCenter: {
        lat: number,
        lng: number
    };
    onMarkerClick?: () => void;
}

export const GMComponent: FC<Props> = ({zoom, initialCenter}) => {

    return (
        <div style={{width: '100%', height: 660, position: 'relative', overflow: 'hidden'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyAJBqa-XYINScNFdq2EQrW1AEMaZc6hJuE"}}
                defaultCenter={initialCenter}
                defaultZoom={zoom}
            >
                <GMMarker lat={initialCenter.lat} lng={initialCenter.lng}/>
            </GoogleMapReact>
        </div>
    )
}