import React, {FC} from "react";
import {useTranslation} from "react-i18next";

export const ProductDetailsDescription: FC<{ description: string }> = ({description}) => {
    const {t} = useTranslation();

    return (
        <div>
            <p>
                <strong>{`${t("COMMON_WORDS.DESCRIPTION")}:`}</strong> {description}
            </p>
        </div>
    )
};