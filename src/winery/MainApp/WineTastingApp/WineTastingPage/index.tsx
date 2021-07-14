import React, {FC} from "react";
import {GoogleMapContact} from "../../../commons/components/GoogleMapContact";
import {RowContent} from "../../../commons/components/RowContent";
import {CommonWrapper} from "../../../commons/components/wrappers/CommonWrapper";
import {EmailForm} from "../../../commons/components/EmailForm";
import {useTranslation} from "react-i18next";

export const WineTastingAppPage: FC<{}> = () => {

    const {t} = useTranslation();

    return (
        <div className="page_content_wrap scheme_default">
            <CommonWrapper>
                <RowContent icon={"icon-glass"}
                            title={t('WINE_TASTING.T1')}
                            subtitle={t('WINE_TASTING.SBT1')}
                            paragraphs={[t('WINE_TASTING.P1')]}
                />
                <RowContent icon={"icon-grape-leafs"}
                            title={t('WINE_TASTING.T2')}
                            subtitle={t('WINE_TASTING.SBT2')}
                            paragraphs={[t('WINE_TASTING.P2')]}
                />
                <RowContent icon={"icon-grape-leafs"}
                            title={t('WINE_TASTING.T3')}
                            subtitle={t('WINE_TASTING.SBT3')}
                            paragraphs={[t('WINE_TASTING.P3')]}
                />
                <RowContent icon={"icon-grape-leafs"}
                            title={t('CONTACT_US.RETAIL.T3')}
                            subtitle={t('CONTACT_US.RETAIL.SBT3')}
                >
                    <EmailForm/>
                </RowContent>
            </CommonWrapper>
            <GoogleMapContact/>
        </div>
    );
};
