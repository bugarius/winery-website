import React from "react";
import {useParams} from "react-router-dom";
import {ProductDetails} from "../ProductDetailsPage/ProductDetails";
import {useBundlesReceiver} from "../../../commons/shared/useBundlesReceiver";
import {ErrorApp} from "../../ErrorApp";
import {AppWrapper} from "../../../commons/components/wrappers/AppWrapper";

export const BundleDetailsPage = () => {
    const {id} = useParams();

    const {bundle} = useBundlesReceiver(parseInt(id));

    return bundle ? (
        <AppWrapper.Product title={"Na prezent"} >
            <ProductDetails imgUrl={bundle?.image}
                            year={bundle?.years}
                            description={bundle?.description}
                            key={bundle?.id}
                            id={bundle.id}
                            price={bundle.price}
                            available={bundle.available}
            />
        </AppWrapper.Product>
    ) : (<ErrorApp/>)
};