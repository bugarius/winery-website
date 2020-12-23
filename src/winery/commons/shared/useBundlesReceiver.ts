import {useEffect, useState} from "react";
import {Bundle} from "../../model/Bundle";
import {Wine} from "../../model/Wine";
import bundlesFile from "../../model/data/bundles.json";
import wines from "../../model/data/wines.json";

interface ReturnProps {
    bundles: Bundle[];
    bundle?: Bundle;
}

export const useBundlesReceiver = (id?: number): ReturnProps => {

    const [bundles, setBundles] = useState<Bundle[]>([]);
    const [bundle, setBundle] = useState<Bundle>();

    useEffect(() => {
        console.log("useBundlesReceiver")
        const getBundleWines = (bundleWines: number[], allWines: Wine[]): (Wine | undefined)[] => {
            return bundleWines.map(wine => {
                return allWines.find(w => w.id === wine);
            })
        }

        setBundles(bundlesFile.map(b => {
            return {
                ...b,
                wines: getBundleWines(b.wines, wines as Wine[]),
            }
        }))
    }, [])

    useEffect(() => {
        setBundle(bundles.find(b => b.id === id))
    }, [bundles, id])
    return {bundles, bundle};
};