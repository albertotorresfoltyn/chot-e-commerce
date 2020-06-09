import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './pages/Products';
import Cart from './pages/Cart';
import Home from './pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
        </Switch>
    );
}
