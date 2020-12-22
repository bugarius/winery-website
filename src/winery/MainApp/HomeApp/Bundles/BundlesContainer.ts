import React, {useEffect, useState} from "react";
import bundlesDescription from "./data/bundles-description.json"
import {Wine} from "../../../model/Wine";
import wines from "../../../model/data/wines.json"
import {Bundle} from "../../../model/Bundle";
import bundlesFile from "../../../model/data/bundles.json";
import {Description} from "../OurWines/OurWinesContainer";

interface Props
{
    render: (wines: Bundle[], description: Description) => JSX.Element;
}

export const BundlesContainer: React.FC<Props> = ({render}) => {
    const description = bundlesDescription as Description;

    const [bundles, setBundles] = useState<Bundle[]>([]);

    useEffect(() => {
        const getBundleWines = (bundleWines: number[], allWines: Wine[]): (Wine | undefined)[] => {
            return bundleWines.map(wine => {
                return allWines.find(w => w.id === wine);
            })
        }

        setBundles(bundlesFile.map(bundle => {
            return {
                ...bundle,
                wines: getBundleWines(bundle.wines, wines as Wine[]),
            }
        }))
    }, [])

    return render(bundles, description)
};