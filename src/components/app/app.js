import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { About, Movies, Movie, ShoppingCart, NotFound } from '../pages';

import './app.css';

const App = () => {
  return(
    <Fragment>    
      <Switch> 
        <Route path="/" component={About} exact />
        <Route path="/movies" component={Movies} exact />
        <Route path="/movies/:movie" component={Movie} />
        <Route path="/cart" component={ShoppingCart} />
        <Route component={NotFound} />
      </Switch> 
    </Fragment>
  );
};

export default App; 