import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Gamepage"
import "./App.css";

class App extends Component {
    render() {
        const { location } = this.props;

        return <Switch>
                <Route location={location} path="/" exact component={Home} />
                <Route location={location} path="/play" exact component={Game} />
            </Switch>;
    }
}

export default App;
