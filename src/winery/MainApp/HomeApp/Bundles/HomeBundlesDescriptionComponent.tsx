import React, {FC} from "react";
import {RowDescription} from "../../../commons/components/home/row/HomeRowComponent/RowDescription";
import {Description} from "../OurWines/OurWinesContainer";

export const HomeBundlesDescriptionComponent: FC<{description: Description}> = ({description}) => {
  return (
      <RowDescription title={description.title}
                      subtitle={description.subtitle}
                      text={description.text}
                      icon={"icon-bottles"}
      />
  )  
};