import React, {FC} from "react";

interface Props {
    address: string;
    phones: string[];
    email: string;
}

export const ContactDetails: FC<Props> = ({address, phones, email}) => {
    return (
        <div className="sc_googlemap_content sc_googlemap_content_detailed">
            <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                    <p><em><b>Adres:</b></em><br/>{address}</p>
                    <p><em><b>Telefony:</b></em><br/>
                        {
                            phones.map(phone => {
                                return <div>{phone}</div>
                            })
                        }
                    </p>
                    <p><em><b>E-mail:</b></em><br/>{email}</p>
                </div>
            </div>
        </div>
    )
};