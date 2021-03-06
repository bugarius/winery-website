import React from "react";
import DotComponent from "./DotComponent";
import {PopupComponent, PopupProps} from "./PopupComponent";
import {WineInList} from "../../../commons/shared/useWineConcat";
import {DotSection} from "./DotSection/DotSection";
import {CenterSection} from "./CenterSection/CenterSection";
import {useScrollContext} from "../ScrollContext";
import {FileUtils} from "../../../commons/shared/Utils";
import {pageStyle} from "../../../../pageConfig";

export interface DotPopupsProps
{
    showPopupDots?: boolean;
    onDotClick: (event: React.MouseEvent<HTMLElement>, wineId: number) => void;
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
        <div ref={refs.home}
             className={"row row-no-padding vc_custom_1469089433188 row-o-columns-middle custom-home-image " + (window.innerWidth < 768 ? "row-o-full-height" : " row-o-full-height")}
             style={{backgroundImage: `url(${FileUtils.getImage(pageStyle.home.mainImage)})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', verticalAlign: 'middle', paddingTop: '5rem'}}
        >
            <DotSection showPopupDots={showPopupDots}>
                {winesInDots?.[0] &&
                <DotComponent position={{top: 60, left: 20}}
                              onClick={(e) => onDotClick(e, winesInDots?.[0]?.id)}
                />
                }
                {winesInDots?.[1] &&
                <DotComponent position={{top: 80, left: 90}}
                              onClick={(e) => onDotClick(e, winesInDots?.[1]?.id)}
                />
                }
            </DotSection>
            <CenterSection text={"WINO Z CZĘSTOCHOWSKIEJ ZIEMI!"} textColor={"white"}/>
            <DotSection showPopupDots={showPopupDots}>
                {winesInDots?.[2] &&
                <DotComponent position={{top: 35, left: 10}}
                              onClick={(e) => onDotClick(e, winesInDots?.[2]?.id)}
                />
                }
                {winesInDots?.[3] &&
                <DotComponent position={{top: 60, left: 65}}
                              onClick={(e) => onDotClick(e, winesInDots?.[3]?.id)}
                />
                }
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
    );
}

export default VineyardTopComponentPresentation;