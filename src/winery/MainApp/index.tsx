import React, {useEffect} from "react";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import HomeApp from "./HomeApp";
import {WineApp} from "./WineApp";
import {ProductDetailsPage} from "./WineApp/ProductDetailsPage";
import {VineyardApp} from "./VineyardApp";
import {WineTrailApp} from "./WineTrailApp";
import {AboutUsApp} from "./AboutUsApp";
import {HowToBuyApp} from "./HowToBuyApp";
import {ContactApp} from "./ContactApp";
import {ErrorApp} from "./ErrorApp";
import {BundleDetailsPage} from "./WineApp/BundleDetailsPage";

const MainApp = () => {

    const history = useHistory();
    useEffect(() => {
        window.scroll(0,0);
    }, [history.location])

    return (
        <Switch>
            <Route path="/kontakt" component={ContactApp}/>
            <Route path="/o_nas" component={AboutUsApp}/>
            <Route path="/winnica" component={VineyardApp}/>
            <Route path="/szlakwinny" component={WineTrailApp}/>
            <Route path="/wina/sprzedaz" component={HowToBuyApp}/>
            <Route path="/wina/karta_win/:id" component={ProductDetailsPage}/>
            <Route path="/wina/na_prezent/:id" component={BundleDetailsPage}/>
            <Route path="/wina/karta_win" component={WineApp}/>
            <Route exact path="/" component={HomeApp}/>
            <Route path={"/404"} component={ErrorApp}/>
            <Redirect to={"/404"}/>
        </Switch>
    )
};

export default MainApp;