import React, {ChangeEvent, FC} from "react";

interface Props {
    name: string;
    value: string;
    label: string;
    type: "text" | "email" | "number" | "textarea" | "password";
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    maxLength?: number;
    required?: boolean;
    showError?: boolean;
}

export const InputElement: FC<Props> = ({
                                            name,
                                            value,
                                            label,
                                            type = "text",
                                            onChange,
                                            maxLength,
                                            required,
                                            showError}) => {

    const Tag = type === "textarea" ? "textarea" : "input";

    return (
        <label className={"sc_form_field" + (required ? " required" : "") + (type === "textarea" ? " sc_form_field_message" : "")}>
            <span className="sc_form_field_wrap">
                <Tag type={type}
                       name={name}
                       value={value}
                       onChange={onChange}
                       className={(value?.length ? "filled" : "") + (showError ? " trx_addons_field_error" : "")}
                       maxLength={maxLength}
                />
                <span className="sc_form_field_hover">
                    <span className="sc_form_field_content">{label}</span>
                </span>
            </span>
        </label>
    )
};