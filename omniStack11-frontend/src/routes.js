import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Cases from './pages/Cases';
import NewCase from './pages/NewCase';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/cases" component={Cases} />
                <Route path="/newcase" component={NewCase} />
            </Switch>
        </BrowserRouter>
    );
}