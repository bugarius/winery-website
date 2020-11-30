import React, {FC} from "react";

interface Props
{
    text: string;
    status: MessageStatus;
}

type MessageStatus = "general" | "info" | "warning" | "success";

const convertStatus = (status: MessageStatus) => {
    switch (status)
    {
        case "success":
            return {icon: "icon-favorite", color: "vc_color-vista_blue"};
        case "info":
            return {icon: "icon-info-2", color: "vc_color-orange"};
        case "warning":
            return {icon: "icon-clear-button", color: "vc_color-juicy_pink"}
        default:
            return {icon: "icon-grape", color: "vc_color-black"};
    }
}

export const MessageBox: FC<Props> = ({text, status}) => {

    const {color, icon} = convertStatus(status);

    return (
        <div className="wpb_column vc_column_container" style={{display: text?.length ? "block" : "none"}}>
            <div className="vc_column-inner">
                <div className="wpb_wrapper">
                    <div
                        className={"vc_message_box vc_message_box-outline vc_message_box-square inited " + color}>
                        <div className="vc_message_box-icon"><i className={icon}/>
                        </div>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};