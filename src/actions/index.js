const moviesRequested = () => {
  return {
    type: 'FETCH_MOVIES_REQUESTED'
  };
};

const moviesLoaded = (newMovies) => {
  return {
    type: 'FETCH_MOVIES_LOADED',
    payload: newMovies
  };
};

const moviesError = (error) => {
  return {
    type: 'FETCH_MOVIES_FAILURE',
    payload: error
  };
};

const sortChange = (btnName) => {
  return {
    type: 'MOVIE_SORT_CHANGE',
    payload: btnName
  };
};

const searchChange = (term) => {
  return {
    type: 'MOVIE_SEARCH_CHANGE',
    payload: term
  };
};

const movieAddedToCart = (movieId) => {
  return {
    type: 'MOVIE_ADDED_TO_CART',
    payload: movieId
  };
};

const movieRemovedFromCart = (movieId) => {
  return {
    type: 'MOVIE_REMOVED_FROM_CART',
    payload: movieId
  };
};

const allmoviesRemovedFromCart = (movieId) => {
  return {
    type: 'ALL_MOVIES_REMOVED_FROM_CART',
    payload: movieId
  };
};

const fetchMovies = (moviestoreService, dispatch) => () => {
  dispatch(moviesRequested());
  moviestoreService.getAllMovies()
    .then((data) => dispatch(moviesLoaded(data)))
    .catch((err) => dispatch(moviesError(err)));
}

export {
  fetchMovies,
  sortChange,
  searchChange,
  movieAddedToCart,
  movieRemovedFromCart,
  allmoviesRemovedFromCart
};
