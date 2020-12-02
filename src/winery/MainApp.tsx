import React, {useEffect} from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import HomeApp from "./HomeApp";
import {WineApp} from "./WineApp/WineApp";
import {ProductApp} from "./ProductApp/ProductApp";
import {VineyardApp} from "./VineyardApp";
import {AboutUsApp} from "./AboutUsApp";
import {HowToBuyPage} from "./HowToBuyPage";

const MainApp = () => {

    const history = useHistory();
    useEffect(() => {
        window.scroll(0,0);
    }, [history.location])

    return (
        <Switch>
            <Route path="/o_nas" component={AboutUsApp}/>
            <Route path="/winnica" component={VineyardApp}/>
            <Route path="/wina/sprzedaz" component={HowToBuyPage}/>
            <Route path="/wina/karta_win/:id" component={ProductApp}/>
            <Route path="/wina/karta_win" component={WineApp}/>
            <Route exact path="/" component={HomeApp}/>
        </Switch>
    )
};

export default MainApp;