import React from "react";
import {AppWrapper} from "../../commons/components/wrappers/AppWrapper";
import {AwardsPage} from "./AwardsPage";
import {useTranslation} from "react-i18next";

export const AwardsApp = () => {

    const {t} = useTranslation();

    return (
        <AppWrapper.Default title={t('AWARDS.TITLE')}>
            <AwardsPage/>
        </AppWrapper.Default>
    )
};