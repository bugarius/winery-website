import React, {FC} from "react";
import {GoogleMapContact} from "../../../commons/components/GoogleMapContact";
import {RowContent} from "../../../commons/components/RowContent";
import {CommonWrapper} from "../../../commons/components/wrappers/CommonWrapper";
import {EmailForm} from "../../../commons/components/EmailForm";
import {useTranslation} from "react-i18next";

export const ContactPage: FC<{}> = () => {

    const {t} = useTranslation();

    return (
        <div className="page_content_wrap scheme_default">
            <GoogleMapContact/>
            <CommonWrapper>
                <RowContent icon={"icon-grape-leafs"}
                            title={t('CONTACT_US.RETAIL.T3')}
                            subtitle={t('CONTACT_US.RETAIL.SBT3')}
                />
                <EmailForm/>
            </CommonWrapper>
        </div>
    );
};
