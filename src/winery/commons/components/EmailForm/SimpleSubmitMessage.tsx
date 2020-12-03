import React, {FC} from "react";

interface SubmitMessage {
    isValid: boolean;
    message: string;
}

interface Props {
    submitMessage: SubmitMessage;
    show: boolean;
}

export const SimpleSubmitMessage: FC<Props> = ({submitMessage, show}) => {
  return (
      <div style={{
          paddingTop: "10px",
          color: (submitMessage.isValid ? "orange" : "red"),
          display: (show ? "block" : "none")
      }}>
          {submitMessage.message}
      </div>
  )
};