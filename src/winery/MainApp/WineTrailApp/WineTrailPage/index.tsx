import React from "react";
import Badges from "../../../commons/components/Badges";
import {RowContent} from "../../../commons/components/RowContent";
import {FullWideImage} from "../../../commons/components/FullWideImage";

export const WineTrailPage = () => {

    return (
        <div className="page_content_wrap scheme_default">
            <div className="wrap">
                <RowContent icon={"icon-grape-leafs"}
                            title={"Wśród natury"}
                            subtitle={"Lubisz się ruszać? Rowerem, pieszo (z kijkami lub bez ;)?"}
                            paragraphs={[
                                "W takim razie koniecznie zajrzyj do naszej winiarni szlakiem prowadzącym od ulicy Zakopiańskiej przez pola, lasy oraz naszą winnicę.",
                            ]}
                />
                <FullWideImage image={"szlakwinny2.jpg"} padding={{paddingBottom: "50px"}}/>
                <RowContent icon={"icon-grape-leafs"}
                            title={"Z lampką wina"}
                            subtitle={"W naszej winiarni możesz kupić lapkę wina i degustować ją w dowolnym miejscu."}
                            paragraphs={[
                                "Do wyboru masz wiele możliwości. Możesz usiąść w altanie, przy stoliku pod gołym niebem, spacerować lub nawet zabrać leżak w dowolne miejsce i wypocząć w towarzystwie wina i winorośli, z których powstało.",
                                "Oczywiście możesz również kupić butelkę na wynos w naszym sklepie."
                            ]}
                />
                <FullWideImage image={"jakosc.jpg"} padding={{paddingBottom: "50px"}} />
                <RowContent icon={"icon-grape-leafs"}
                            title={"Dostępność"}
                            subtitle={"Z przejścia przez winnicę może korzystać każdy, kto chce skorzystać z naszej oferty."}
                            paragraphs={[
                                "Korzystając, należy pamiętać o:",
                                "- każdorazowym zamykaniu bramy wejściowej, w celu zabezpieczenia roślin przed zwierzyną leśną.",
                                "- nie zrywaniu liści i gron z winorośli"
                            ]}
                />
                <FullWideImage image={"szlakwinny1.jpg"} padding={{paddingBottom: "50px"}} />
            </div>
            <Badges/>
            <FullWideImage image={"szlakwinny3.jpg"} />
        </div>
    )
};