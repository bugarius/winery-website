import React, {FC} from "react";

export const ProductDetailsImage: FC<{src: string, alt?: string}> = ({src, alt}) => {
  return (
      <div className="images">
          <img
              width={540}
              height={720}
              src={src}
              alt={alt}
          />
      </div>
  )
};