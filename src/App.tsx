import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import AppRouting from "./platform/AppRouting";
import ResponsiveProvider from "./winery/HomeApp/ResponsiveContext";
import ScrollProvider from "./winery/HomeApp/ScrollContext";
import {initGA, PageView} from "./winery/components/Tracking";
import {createBrowserHistory} from "history";
import {SliderTop} from "./winery/commons/components/SliderTop";

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
            <ScrollProvider>
                <ResponsiveProvider>
                    <AppRouting/>
                    <SliderTop/>
                </ResponsiveProvider>
            </ScrollProvider>
        </HashRouter>
    );
}

export default App;
