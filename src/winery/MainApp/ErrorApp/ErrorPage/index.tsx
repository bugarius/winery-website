import React, {FC} from "react";
import {Link} from "react-router-dom";

interface Props {
    code?: string;
    header?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    hideButton?: boolean;
}

export const ErrorPage: FC<Props> = ({
                              code = "404",
                              header = "Oj...",
                              description = "Coś poszło nie tak",
                              buttonText = "Strona startowa",
                              buttonLink = "/",
                              hideButton
}) => {
    return (
        <div className="page_content_wrap scheme_default">
            <div className="wrap">
                <div className="content">
                    <article className="post_item_single post_item_404 post-0 unknown type-unknown">
                        <div className="post_content">
                            <h1 className="page_title">{code}</h1>
                            <div className="page_info">
                                <h1 className="page_subtitle">{header}</h1>
                                <p className="page_description">{description}</p>
                                {!hideButton &&
                                    <Link to={buttonLink}
                                             className="go_home theme_button sc_button_hover_slide_top google-drive-opener">
                                        {buttonText}
                                    </Link>
                                }
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
};
