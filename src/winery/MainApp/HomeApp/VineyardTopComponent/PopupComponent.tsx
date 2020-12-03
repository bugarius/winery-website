import React, {FC, Ref} from "react";
import {FileUtils} from "../../../commons/shared/Utils";
import {NavLink} from "react-router-dom";
import {WineInList} from "../../../commons/shared/useWineConcat";

export interface PopupProps {
    wrapperRef: Ref<any>;
    showPopup: boolean;
    position?: {x: number, y: number};
    selectedWine?: WineInList;
    imageLoaded?: boolean;
    onLoadImage?: () => void;
}

export const PopupComponent: FC<PopupProps> = ({wrapperRef, showPopup, position, selectedWine, imageLoaded, onLoadImage}) => {

    return (
        <div ref={wrapperRef} className={"tooltipster-base tooltipster-light tooltipster-grow tooltipster-dying" + (showPopup ? " tooltipster-grow-show" : "")} style={{maxWidth: '210px', pointerEvents: 'auto', transitionDuration: '300ms', animationDuration: '300ms', top: `${(position?.y)}px`, left: `${position?.x}px`}}><div className="tooltipster-content">
            <div className="wpb_single_image wpb_content_element vc_align_center">
                <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper   vc_box_border_grey">
                        <img className="vc_single_image-img "
                             src={FileUtils.getImage(selectedWine?.imgUrl)}
                             width={210}
                             height={230}
                             alt={`${selectedWine?.variety} ${selectedWine?.year}`}
                             title={`${selectedWine?.variety} ${selectedWine?.year}`}
                             onLoad={onLoadImage}
                             style={{filter: (!imageLoaded ? "blur(8px)" : "")}}
                        />
                    </div>
                </figure>
            </div>
            <div className="wpb_text_column wpb_content_element  scheme_dark">
                <div className="wpb_wrapper">
                    <p style={{textAlign: 'center'}}>
                        <span className="trx_addons_dark">{selectedWine?.variety}</span><br />
                        <span className="trx_addons_accent trx_addons_tiny_text">{selectedWine?.year}</span><br />
                        <span className="trx_addons_dark trx_addons_tiny_text"><NavLink to={`/wina/karta_win/${selectedWine?.id}`}>Zobacz szczegóły</NavLink></span>
                    </p>
                </div>
            </div>
        </div><div className="tooltipster-arrow-top tooltipster-arrow" style={{left: '19px'}}><span style={{borderColor: 'rgb(237, 237, 237)'}} /></div></div>
    )
};