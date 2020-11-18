import React from "react";
import DotComponent from "./DotComponent";
import "../../../css/custom.css"
import {PopupComponent, PopupProps} from "./PopupComponent";
import {WineInList} from "../shared/useWineConcat";
import {DotSection} from "./DotSection/DotSection";
import {CenterSection} from "./CenterSection/CenterSection";
import {useScrollContext} from "../../HomeApp/ScrollContext";

export interface DotPopupsProps
{
    showPopupDots?: boolean;
    onDotClick: (event: Event, wineId: number) => void;
    winesInDots: WineInList[]
    popupProps: PopupProps;
}

const VineyardTopComponentPresentation: React.FC<DotPopupsProps> = ({
                                                                        showPopupDots,
                                                                        onDotClick,
                                                                        winesInDots,
                                                                        popupProps,
                                                                    }) => {
    const {refs} = useScrollContext();

    return (
        <div ref={refs.home} className={"row row-no-padding vc_custom_1469089433188 row-o-columns-middle" + (window.innerWidth < 768 ? "" : " row-o-full-height")}>
            <DotSection showPopupDots={showPopupDots}>
                <DotComponent position={{top: 60, left: 20}}
                              onClick={(e) => onDotClick(e, winesInDots?.[0]?.id || 3)}
                />
                <DotComponent position={{top: 80, left: 90}}
                              onClick={(e) => onDotClick(e, winesInDots?.[1]?.id || 5)}
                />
            </DotSection>
            <CenterSection text={"RODZINNA PRODUKCJA NAJWYŻSZEJ JAKOŚCI WIN Z WŁASNYCH UPRAW"}/>
            <DotSection showPopupDots={showPopupDots}>
                <DotComponent position={{top: 35, left: 10}}
                              onClick={(e) => onDotClick(e, winesInDots?.[2]?.id || 7)}
                />
                <DotComponent position={{top: 60, left: 65}}
                              onClick={(e) => onDotClick(e, winesInDots?.[3]?.id || 10)}
                />
            </DotSection>
            {popupProps &&
            <PopupComponent position={popupProps.position}
                            showPopup={popupProps.showPopup}
                            wrapperRef={popupProps.wrapperRef}
                            selectedWine={popupProps.selectedWine}
                            imageLoaded={popupProps.imageLoaded}
                            onLoadImage={popupProps.onLoadImage}
            />
            }
        </div>
    )
}

export default VineyardTopComponentPresentation;