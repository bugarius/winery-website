import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouting from "./platform/AppRouting";

function App()
{
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <AppRouting/>
        </BrowserRouter>
    );
}

export default App;
