import React from "react";
import {GMComponent} from "../GoogleMaps/GMComponent";
import {WINERY_LOCATION} from "../../consts/consts";
import {GoogleMapWrapper} from "./GoogleMapWrapper";
import {ContactDetails} from "../ContactDetails";

export const GoogleMapContact = () => {
    return (
        <GoogleMapWrapper>
            <GMComponent zoom={14} initialCenter={WINERY_LOCATION}/>
            <ContactDetails address={"ul. Ludowa 79, Częstochowa"}
                            phones={['+48 608 099 024', '+48 608 469 814', '+48 602 267 889']}
                            email={'mariusz.bugara@gmail.com'}
            />
        </GoogleMapWrapper>
    )
};