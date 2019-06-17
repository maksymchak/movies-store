const sortList = (state, btnName) => {
  const { movielist: {movies} } = state;
  
  switch (btnName) {
    case 'title':
      return {
        ...state.movielist,
        filterBy: btnName,
        movies: movies.sort((a, b) => {
          if (a.title > b.title) return 1;
          else if (a.title < b.title) return -1;
          else return 0;
        })
      };
    case 'toprated':
      return {
        ...state.movielist,
        filterBy: btnName,
        movies: movies.sort((a, b) => {
          if (a.star*10 > b.star*10) return 1;
          else if (a.star*10 < b.star*10) return -1;
          else return 0;
        })
      };
    case 'price':
      return {
        ...state.movielist,
        filterBy: btnName,
        movies: movies.sort((a, b) => a.price - b.price)
      };
    default:
      return state.movielist;;
  }
};

const updateMovieList = (state, action) => {

  if (state === undefined) {
    return {
      movies: [],
      loading: true,
      error: null,
      filterBy: null,
      searchTerm: ''
    };
  }

  switch (action.type) {
    case 'FETCH_MOVIES_REQUESTED':
      return {
        movies: [],
        loading: true,
        error: null,
        filterBy: null,
        searchTerm: ''
      };    
    case 'FETCH_MOVIES_LOADED':
      return {
        movies: action.payload,
        loading: false,
        error: null,
        filterBy: null,
        searchTerm: ''
      };
    case 'FETCH_MOVIES_FAILURE':
      return {
        movies: [],
        loading: false,
        error: action.payload,
        filterBy: null,
        searchTerm: ''
      };

    case 'MOVIE_SORT_CHANGE':
      return sortList(state, action.payload);
    
    case 'MOVIE_SEARCH_CHANGE':
      return {
        ...state.movielist,
        searchTerm: action.payload
      }

    default:
      return state.movielist;
  }
};

export default updateMovieList;