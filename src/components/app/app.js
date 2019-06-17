import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from '../app-header';
import { About, Movies, Movie, ShoppingCart, NotFound } from '../pages';

import './app.css';

const App = () => {
  return(
    <Fragment>   
      <AppHeader /> 
      <Switch> 
        <Route path="/" component={About} exact />
        <Route path="/movies-store" component={Movies} exact />
        <Route path="/movies-store/:movie" component={Movie} />
        <Route path="/cart" component={ShoppingCart} />
        <Route component={NotFound} />
      </Switch> 
    </Fragment>
  );
};

export default App; 