import React, {FC} from "react";
import {GoogleMapContact} from "./GoogleMapContact";
import {RowContent} from "../RowContent";
import {CommonWrapper} from "../wrappers/CommonWrapper";
import {EmailForm} from "./EmailForm";

export const ContactUs: FC<{}> = () => {

    return (
        <div className="page_content_wrap scheme_default">
            <GoogleMapContact/>
            <CommonWrapper>
                <RowContent icon={"icon-winery"}
                            title={"Skontaktuj się"}
                            subtitle={"Jeśli masz pytania odnoście naszych win, degustacji, zwiedzania, zakupów zapraszamy do kontaktu"}
                />
                <EmailForm/>
            </CommonWrapper>
        </div>
    );
};
