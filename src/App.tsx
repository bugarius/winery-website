import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import AppRouting from "./platform/AppRouting";
import ResponsiveProvider from "./winery/MainApp/HomeApp/ResponsiveContext";
import ScrollProvider from "./winery/MainApp/HomeApp/ScrollContext";
import {initGA, PageView} from "./winery/commons/Tracking";
import {createBrowserHistory} from "history";
import {SliderTop} from "./winery/commons/components/SliderTop";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorApp} from "./winery/MainApp/ErrorApp";

function App()
{
    const history = createBrowserHistory();

    useEffect(() => {
        initGA('UA-72516664-1');
        history.listen(location => {
            PageView(location);
        })
    })

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <ErrorBoundary FallbackComponent={ErrorApp}>
                <ScrollProvider>
                    <ResponsiveProvider>
                        <AppRouting/>
                        <SliderTop/>
                    </ResponsiveProvider>
                </ScrollProvider>
            </ErrorBoundary>
        </HashRouter>
    );
}

export default App;
