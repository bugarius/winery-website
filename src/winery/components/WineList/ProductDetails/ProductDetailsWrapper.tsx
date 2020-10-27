import React, {FC} from "react";

export const ProductDetailsWrapper: FC<{}> = ({children}) => {
  return (
      <div className="page_content_wrap scheme_default" style={{paddingBottom: "25px"}}>
          <div className="wrap">
              <div className="content">
                  <div className="post_item_single post_type_product">
                      <div className="product type-product has-post-thumbnail first">
                          {children}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
};