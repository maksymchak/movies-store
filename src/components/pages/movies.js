import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { withMoviestoreService } from '../hoc';
import { fetchMovies, movieAddedToCart, sortChange, searchChange } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import Card from '../card';
import FilterPanel from '../filter-panel';

class Movies extends Component {
  
  componentDidMount() {
    this.props.fetchMovies();
  }

  search(items, value) {
    if (value.length === 0) {
      return items;
    };

    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }

  render() {
    const { movies, loading, error, filterBy, searchTerm, onAddedToCart, 
      onSortChange, onSearchChange } = this.props; 

    const visibleItems = this.search(movies, searchTerm);
     
    const cardItems = (
      <Fragment>
        {visibleItems.map((movie) => {
          return <Card 
                    key={movie.id}
                    movie={movie}
                    onAddedToCart={() => onAddedToCart(movie.id)} />
        })}        
      </Fragment>
    );

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? cardItems : null;

    return(
      <div className="container">
        <div className="row filt-panel">
          <FilterPanel onSortChange={(btnName) => onSortChange(btnName)}
                       filter={filterBy}
                       searchTerm={searchTerm}
                       onSearchChange={(term) => onSearchChange(term)} />
        </div>
        <div className="row">
          {errorMessage}
          {spinner}
          {content}
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ movielist: { movies, loading, error, filterBy, searchTerm }}) => {
  return { movies, loading, error, filterBy, searchTerm };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { moviestoreService } = ownProps;
  return {
    fetchMovies: fetchMovies(moviestoreService, dispatch),
    onAddedToCart: (id) => dispatch(movieAddedToCart(id)),
    onSortChange: (btnName) => dispatch(sortChange(btnName)),
    onSearchChange: (term) => dispatch(searchChange(term))
  };
};

export default withMoviestoreService()(connect(mapStateToProps, 
  mapDispatchToProps)(Movies));