import React from "react";
import {RowContent} from "../../../commons/components/RowContent";
import {FullWideImage} from "../../../commons/components/FullWideImage";
import {useTranslation} from "react-i18next";
import {ArrowButton} from "../../../commons/components/ArrowButton";

export const AwardsPage = () => {

    const {t} = useTranslation();

    return (
        <div className="page_content_wrap scheme_default">
            <div className="wrap">
                <RowContent icon={"icon-bottles"}
                            title={"Riesling 2015"}
                            subtitle={t("AWARDS.RIESLING2015.SUBTITLE")}
                            paragraphs={[
                                t('AWARDS.RIESLING2015.PARAGRAPH.1'),
                                t('AWARDS.RIESLING2015.PARAGRAPH.2'),
                                t('AWARDS.RIESLING2015.PARAGRAPH.3')
                            ]}
                >
                    <ArrowButton path={'/wina/karta_win/1'} label={'Odkryj to wino'}/>
                </RowContent>
                <RowContent icon={"icon-bottles"}
                            title={"Solaris 2019 - półsłodkie"}
                            subtitle={t("AWARDS.SOLARIS2019.SUBTITLE")}
                            paragraphs={[
                                t('AWARDS.SOLARIS2019.PARAGRAPH.1')
                            ]}
                >
                    <ArrowButton path={'/wina/karta_win/6'} label={'Odkryj to wino'}/>
                </RowContent>
                <RowContent icon={"icon-bottles"}
                            title={"Riesling 2019"}
                            subtitle={t("AWARDS.RIESLING2019.SUBTITLE")}
                            paragraphs={[
                                t('AWARDS.RIESLING2019.PARAGRAPH.1'),
                                t('AWARDS.RIESLING2019.PARAGRAPH.2')
                            ]}
                >
                    <ArrowButton path={'/wina/karta_win/5'} label={'Odkryj to wino'}/>
                </RowContent>
            </div>
            <FullWideImage image={"wina-medale.jpg"}/>
        </div>
    );
};