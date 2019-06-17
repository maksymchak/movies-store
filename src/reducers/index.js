import updateShoppingCart from './shoppingcart';
import updateMovieList from './movielist';

const reducer = (state, action) => {
  return {
    movielist: updateMovieList(state, action),
    shoppingcart: updateShoppingCart(state, action)
  };
};

export default reducer;
