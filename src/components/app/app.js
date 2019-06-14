import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { About, Movies } from '../pages';

import './app.css';

const App = () => {
  return(
    <Fragment>    
      <Switch> 
        <Route path="/" component={About} exact />
        <Route path="/movies" component={Movies} exact />
      </Switch> 
    </Fragment>
  );
};

export default App; 