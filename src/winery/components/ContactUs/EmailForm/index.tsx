import React, {FC} from "react";
import {withSendingEmailHOC} from "./withSendingEmailHOC";
import {EmailFormPresentation} from "./EmailFormPresentation";

export const EmailForm: FC<{}> = (props) => {
    const EmailFormWithSendingEmail = withSendingEmailHOC(EmailFormPresentation)
    return <EmailFormWithSendingEmail {...props} />
};
