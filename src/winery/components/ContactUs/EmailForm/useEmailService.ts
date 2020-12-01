import {useEffect} from "react";
import emailjs, {init} from 'emailjs-com';

interface EmailParams
{
    name: string;
    message: string;
    email: string;
}

export const useEmailService = (
    emailParams: EmailParams,
    templateId = "template_f4hmpfg",
    serviceID = "service_45vt21c",
    userID = "user_fjd1Sav5ZdbsWcE3hiBO5") => {

    useEffect(() => {
        init(userID);
    }, [userID])

    const sendEmail = () => {
        return emailjs.send(
            serviceID,
            templateId,
            emailParams,
            userID
        )
    };

    return {sendEmail}
};
