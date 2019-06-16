import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import MoviestoreService from './services/moviestore-service';
import { MoviestoreServiceProvider } from './components/moviestore-service-context';

const moviestoreService = new MoviestoreService();

ReactDOM.render(
  <MoviestoreServiceProvider value={moviestoreService}>
    <Router>
      <App/>
    </Router>
  </MoviestoreServiceProvider>,
  document.getElementById('root')
);
