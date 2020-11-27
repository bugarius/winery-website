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
                            title={"Sprzedaż przy winnicy"}
                            subtitle={"Jeśli chcesz do nas przyjechać, to zapraszamy o każdej rozsądej godzinie. " +
                            "Godziny otwarcia są tylko poglądowe. Do nas można wpaść jak do dobrego znajomego :)"}
                            paragraphAsDiv
                            paragraphs={[
                                "Godziny otwarcia:",
                                "Pon-Pt 9:00 - 18:00",
                                "Sob 10:00 - 17:00",
                                "Niedz 10:00 - 15:00",
                                "~",
                                "Jeśli wpadniesz do nas a winiarnia będzie zamknięta, to jest wielce prawdopodobne, że ktoś " +
                                "właśnie jest na winnicy lub wypełnia inne obowiązki i w ciągu paru chwil może przyjść Ci z pomocą. " +
                                "Wystarczy, że zadzwonisz na jeden z naszych numerów.",
                                "~",
                                "Jeżeli chcesz mieć 100% pewności, że od razu zastaniesz nas w punkcie sprzedaży, to zapraszamy " +
                                "do wcześniejszego kontaktu telefonicznego, lub bezpośredniej wiadomości na naszym facebooku."
                            ]}
                />
                <RowContent icon={"icon-grape-leafs"}
                            title={"Skontaktuj się"}
                            subtitle={"Jeśli masz pytania odnoście naszych win, degustacji, zwiedzania, zakupów zapraszamy do kontaktu"}
                />
                <EmailForm/>
            </CommonWrapper>
        </div>
    );
};
