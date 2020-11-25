import React, {useRef, useState} from "react";
import "../../../css/custom.css"
import useClickOutside from "../shared/useClickOutside";
import {Wine} from "../../model/Wine";
import {useWineConcat, WineInList} from "../shared/useWineConcat";
import wineList from "../WineList/data/wine-list.json"
import wines from "../../model/data/wines.json"
import {WineList} from "../WineList";
import {DotPopupsProps} from "./VineyardTopComponentPresentation";
import {Event} from "../Tracking";
import {ListUtils} from "../shared/Utils";

export const withWinesPopupsHOC = <T extends DotPopupsProps>(WrappedComponent: React.ComponentType<T>) => (ownProps: Omit<T, keyof DotPopupsProps>) => {
    const {wrapperRef} = useClickOutside(() => closePopup())
    const wineInLists = useWineConcat<WineInList>(wines as Wine[], wineList as WineList[]);
    const winesInDots = ListUtils.getListById(wineInLists, [3, 5, 7, 10]);

    const [position, setPosition] = useState<{ x: number, y: number }>();

    const [imageLoaded, setImageLoaded] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const showPopupRef = useRef(showPopup);
    showPopupRef.current = showPopup;


    const [selectedWine, setSelectedWine] = useState<WineInList>();
    const [prevWineId, setPrevWineId] = useState<number>();
    const selectedWineRef = useRef(selectedWine);
    selectedWineRef.current = selectedWine;

    const onDotClick = (e: any, wineId: number) => {
        Event("Exploring", `Click on DotComponent, wineId: #${wineId}`, "HOME_PAGE")

        if (prevWineId !== undefined && prevWineId !== selectedWineRef.current?.id)
        {
            return;
        }
        const newPosition = {x: verifyEdgePositions(e.clientX), y: e.clientY};
        setTimeout(() => {
            setShowPopup(!showPopup);
            setSelectedWine(wineInLists.find(wine => wine.id === wineId));
            setPosition(newPosition);
        }, 300)
    }

    const closePopup = () => {
        selectedWineRef.current && setPrevWineId(selectedWineRef.current?.id)
        if (showPopupRef.current)
        {
            setShowPopup(false);
            setTimeout(() => {
                setImageLoaded(false);
            }, 300)
        }
    };

    const verifyEdgePositions = (positionX: number) => {
        return checkLeftEdgePosition(checkRightEdgePosition(positionX));
    };

    const checkLeftEdgePosition = (positionX: number) => {
        return positionX - (positionX < 105 ? 0 : 105)
    };

    const checkRightEdgePosition = (positionX: number) => {
        return positionX - (positionX < window.innerWidth - 144 ? 0 : window.innerWidth - positionX)
    };

    const popupProps = {
        wrapperRef,
        showPopup,
        position,
        selectedWine,
        imageLoaded: imageLoaded || prevWineId === selectedWine?.id,
        onLoadImage: () => setImageLoaded(true)
    }

    const props = {
        popupProps,
        ...ownProps,
        onDotClick,
        winesInDots
    };

    return <WrappedComponent {...props as T} />
}