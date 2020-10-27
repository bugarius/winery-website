import React from 'react';
import {Route, Switch} from 'react-router-dom'
import MainApp from "../winery/MainApp";

const AppRouting = () => {

    return (
        <Switch>
            <Route path="/" component={MainApp}/>
        </Switch>
    )
};

export default AppRouting;