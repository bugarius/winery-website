import React from "react";
import "../../../../css/custom.css"
import {withWinesPopupsHOC} from "./withWinesPopupsHOC";
import VineyardTopComponentPresentation from "./VineyardTopComponentPresentation";

const VineyardTopComponent: React.FC<{ showPopupDots?: boolean }> = (props) => {

    const VineyardTopComponentWithWinesPopup = withWinesPopupsHOC(VineyardTopComponentPresentation);

    return <VineyardTopComponentWithWinesPopup {...props}/>;
}

export default VineyardTopComponent;