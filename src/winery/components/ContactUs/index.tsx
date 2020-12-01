import React, {FC} from "react";
import {GoogleMapContact} from "./GoogleMapContact";
import {RowContent} from "../RowContent";
import {CommonWrapper} from "../wrappers/CommonWrapper";
import {EmailForm} from "./EmailForm";
import {useTranslation} from "react-i18next";

export const ContactUs: FC<{}> = () => {

    const {t} = useTranslation();

    return (
        <div className="page_content_wrap scheme_default">
            <GoogleMapContact/>
            <CommonWrapper>
                <RowContent icon={"icon-winery"}
                            title={t('CONTACT_US.RETAIL.T1')}
                            subtitle={t('CONTACT_US.RETAIL.SBT1')}
                            paragraphs={[t('CONTACT_US.RETAIL.P1')]}
                />
                <RowContent icon={"icon-grape-3"}
                            title={t('CONTACT_US.RETAIL.T2')}
                            subtitle={t('CONTACT_US.RETAIL.SBT2')}
                            paragraphs={[t('CONTACT_US.RETAIL.P2.1'), t('CONTACT_US.RETAIL.P2.2')]}
                />
                <RowContent icon={"icon-grape-leafs"}
                            title={t('CONTACT_US.RETAIL.T3')}
                            subtitle={t('CONTACT_US.RETAIL.SBT3')}
                />
                <EmailForm/>
            </CommonWrapper>
        </div>
    );
};
