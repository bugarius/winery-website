import ReactGA from "react-ga";
import {Location} from "history";

export const initGA = (trackingID: string) => {
    ReactGA.initialize(trackingID);
}

const getPathFromHash = (hash: string) => {
    return hash?.split("#")?.[1]
}

export const PageView = (location: Location) => {
    ReactGA.set({page: getPathFromHash(location.hash) || location.pathname}); // Update the user's current page
    ReactGA.pageview(getPathFromHash(location.hash) || location.pathname);  // Record a pageview for the given page
}

export const Event = (category: string, action: string, label: string) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
};