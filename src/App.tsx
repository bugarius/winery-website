import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import AppRouting from "./platform/AppRouting";
import ResponsiveProvider from "./winery/HomeApp/ResponsiveContext";

function App()
{
    return (
        <HashRouter basename={process.env.PUBLIC_URL + '/'}>
            <ResponsiveProvider>
                <AppRouting/>
            </ResponsiveProvider>
        </HashRouter>
    );
}

export default App;
