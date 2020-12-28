import React from "react";
import bundlesDescription from "./data/bundles-description.json"
import {Bundle} from "../../../model/Bundle";
import {Description} from "../OurWines/OurWinesContainer";
import {useBundlesReceiver} from "../../../commons/shared/useBundlesReceiver";

interface Props
{
    render: (wines: Bundle[], description: Description) => JSX.Element;
}

export const BundlesContainer: React.FC<Props> = ({render}) => {
    const description = bundlesDescription as Description;
    const {bundles} = useBundlesReceiver();

    return render(bundles, description)
};