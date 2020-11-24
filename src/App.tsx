import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import AppRouting from "./platform/AppRouting";
import ResponsiveProvider from "./winery/HomeApp/ResponsiveContext";
import ReactGA from "react-ga";
import {createBrowserHistory} from "history";
import ScrollProvider from "./winery/HomeApp/ScrollContext";

function App()
{
    const history = createBrowserHistory();

    useEffect(() => {
        ReactGA.initialize('UA-72516664-1');
        ReactGA.pageview(window.location.pathname);
    })

    const getPathFromHash = (hash: string) => {
        return hash?.split("#")?.[1]
    }

    history.listen(location => {
        ReactGA.initialize('UA-72516664-1');
        ReactGA.set({page: getPathFromHash(location.hash) || location.pathname}); // Update the user's current page
        ReactGA.pageview(getPathFromHash(location.hash) || location.pathname); // Record a pageview for the given page

    });

    return (
        <HashRouter>
            <ScrollProvider>
                <ResponsiveProvider>
                    <AppRouting/>
                </ResponsiveProvider>
            </ScrollProvider>
        </HashRouter>
    );
}

export default App;
