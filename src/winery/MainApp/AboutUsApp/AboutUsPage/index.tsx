import React from "react";
import {RowContent} from "../../../commons/components/RowContent";
import {FullWideImage} from "../../../commons/components/FullWideImage";

export const AboutUsPage = () => {

    return (
        <div className="page_content_wrap scheme_default">
            <div className="wrap">
                <RowContent icon={"icon-bottles"}
                            title={"Jakość"}
                            subtitle={"Tworzymy wino z myślą o naszych klientach, dlatego też dbamy o jakość na każdym etapie produkcji."}
                />
                <FullWideImage image={"jakosc.jpg"} padding={{paddingBottom: "50px"}} />
                <RowContent icon={"icon-grape-3"}
                            title={"Moszcz ociekowy"}
                            subtitle={"Jednym z elementów, które mają duży wpływ na jakość naszych win jest produkcja wina z soku ociekowego, czyli takiego, który jest pozyskiwany poprzez lekkie zgniecenie winogron z pominięciem ich tłoczenia (prasowania)."}
                />
                <FullWideImage image={"wino_ociekowe.jpg"} padding={{paddingBottom: "50px"}} />
                <RowContent icon={"icon-grape-leafs"}
                            title={"W jendym miejscu"}
                            subtitle={"Cała produkcja, od zbiorów aż do butelkowania, odbywa się w jednym miejscu, dzięki czemu mamy całkowitą kontrolę nad jakością naszych win."}
                />
                <FullWideImage image={"w_jednym_miejscu.jpg"} padding={{paddingBottom: "50px"}} />
                <RowContent icon={"icon-winery"}
                            title={"Plener, degustacja i sprzedaż"}
                            subtitle={"Serdecznie zapraszamy do odwiedzenia naszej winnicy i winiarni."}
                />
                <FullWideImage image={"winnica_bugara_4.jpg"} padding={{paddingBottom: "50px"}} />
            </div>
            <FullWideImage image={"image-20.jpg"} />
        </div>
    );
};