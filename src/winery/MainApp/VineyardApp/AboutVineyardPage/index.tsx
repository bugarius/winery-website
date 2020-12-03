import React from "react";
import {FileUtils} from "../../../commons/shared/Utils";
import Badges from "../../../commons/components/Badges";
import {RowContent} from "../../../commons/components/RowContent";
import {FullWideImage} from "../../../commons/components/FullWideImage";

export const AboutVineyardPage = () => {

    return (
        <div className="page_content_wrap scheme_default">
            <div className="wrap">
                <RowContent icon={"icon-grape-3"}
                            title={"Winnica"}
                            subtitle={"Winnica położona jest na peryferiach Częstochowy, tuż przy północnym krańcu Jury Krakowsko-Częstochowskiej."}
                            paragraphs={[
                                "Początki winnicy sięgają 2008 roku, kiedy to posadziliśmy pierwsze sadzonki Rieslinga. W kolejnych latach sukcesywnie powiększaliśmy nasz areał o inne odmiany winorośli, takie jak Solaris, Regent czy Cabernet Cortis.",
                                "W 2020 roku nasza winnica zajmowała już  powierzchnię 2 ha."
                            ]}
                />
                <div className="row vc_column-gap-30">
                    <div className="wpb_column vc_column_container column-1_12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper"/>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container column-5_12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                                <div className="wpb_single_image wpb_content_element vc_align_left">
                                    <figure className="wpb_wrapper vc_figure">
                                        <img
                                            width={1024}
                                            height={738}
                                            src={FileUtils.getImage("winnica_bugara_6.jpg")}
                                            className="vc_single_image-img attachment-large"
                                            alt="winnica_bugara_2"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container column-5_12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                                <div
                                    className="vc_empty_space  height_large hide_on_mobile"
                                    style={{height: 0}}
                                />
                                <div className="vc_empty_space  height_large" style={{height: 0}}/>
                                <div className="wpb_single_image wpb_content_element vc_align_left">
                                    <figure className="wpb_wrapper vc_figure">
                                        <img
                                            width={1024}
                                            height={683}
                                            src={FileUtils.getImage("winnica_bugara_5.jpg")}
                                            className="vc_single_image-img attachment-large"
                                            alt="winnica_bugara_3"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container column-1_12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="wpb_column vc_column_container column-12_12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                                <div
                                    className="vc_empty_space  height_large hide_on_mobile"
                                    style={{height: 0}}
                                />
                                <div className="vc_empty_space  height_medium" style={{height: 0}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <RowContent icon={"icon-grape-leafs"}
                            title={"Riesling"}
                            subtitle={"Nasza główna odmiana winorośli, która aktualnie zajmuje powierzchnię ok 1 ha."}
                            paragraphs={[
                                "Cechy charakterystyczne tej odmiany, to wysoka kwasowość, skłonność do aromatów cytrusowych i brzoskwiniowych oraz nut mineralnych.",
                                "Wina z tej odmiany, przy zachowaniu swojego specyfcznego charakeru, potrafią smakować odmiennie. Duży wpływ ma tutaj m. in. gleba, na której rośnie.",
                                "W naszej winnicy z tej odmiany dostępne bywają wina wytrawne oraz półsłodkie (prawie półwytrawne)."
                            ]}
                />
                <FullWideImage image={"winorosl_riesling.jpg"} padding={{paddingBottom: "50px"}}/>
                <RowContent icon={"icon-grape-leafs"}
                            title={"Solaris"}
                            subtitle={"Nasza druga biała odmiana winorośli."}
                            paragraphs={[
                                "Cechy charakterystyczne tej odmiany, to niska kwasowość, skłonność do aromatów ananasa i gruszek oraz nut kwiatowych.",
                                "Ze względu na wysoki poziom cukru Solaris idealnie nadaje się do produkcji win deserowych.",
                                "W naszej winnicy z tej odmiany dostępne bywają białe wina wytrawne i półsłodkie oraz pomarańczowe wina wytrawne."
                            ]}
                />
                <FullWideImage image={"winorosl_solaris.jpg"} padding={{paddingBottom: "50px"}} />
                <RowContent icon={"icon-grape-leafs"}
                            title={"Regent"}
                            subtitle={"Nasza pierwsza czerwona odmiana winorośli."}
                            paragraphs={[
                                "Cechy charakterystyczne tej odmiany, to lekki owocowy aromat, ciemna barwa oraz mniejsza ilość tanin.",
                                "W naszej winnicy z tej odmiany dostępne bywają czerwone wina wytrawne oraz różowe wina półwytrawne."
                            ]}
                />
                <FullWideImage image={"winorosl_regent.jpg"} padding={{paddingBottom: "50px"}} />
                <RowContent icon={"icon-grape-leafs"}
                            title={"Cabernet Cortis"}
                            subtitle={"Nasza druga czerwona odmiana winorośli."}
                            paragraphs={[
                                "Cechy charakterystyczne tej odmiany, to zauważalny poziom garbników, intensywny kolor, bogate spektrum aromatyczne z silnie zaznaczonymi nutami owocowymi.",
                                "W naszej winnicy z tej odmiany dostępne bywają czerwone oraz różowe wina wytrawne."
                            ]}
                />
                <FullWideImage image={"winorosl_cabernet.jpg"} padding={{paddingBottom: "50px"}} />
            </div>
            <Badges/>
            <FullWideImage image={"image-194137.jpg"} />
        </div>
    )
};