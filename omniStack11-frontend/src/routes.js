import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Cases from './pages/Cases';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/Register" component={Register} />
                <Route path="/Cases" component={Cases} />
            </Switch>
        </BrowserRouter>
    );
}