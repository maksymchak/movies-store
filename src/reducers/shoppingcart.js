const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0 ) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (movie, item = {}, quantity) => {

  const {
    id = movie.id,
    count = 0,
    title = movie.title,
    total = 0 } = item;
 
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*movie.price
  };
};

const updataOrder = (state, movieId, quantity) => {
  const { movielist: {movies}, shoppingcart: {cartItems} } = state;
  const movie = movies.find(({id}) => id === movieId);
  const itemIndex = cartItems.findIndex(({id}) => id === movieId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(movie, item, quantity);

  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
}

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  }

  switch (action.type) {
    case 'MOVIE_ADDED_TO_CART':
      return updataOrder(state, action.payload, 1);

    case 'MOVIE_REMOVED_FROM_CART':
      return updataOrder(state, action.payload, -1);

    case 'ALL_MOVIES_REMOVED_FROM_CART':
      const item = state.shoppingcart.cartItems.find(({
        id
      }) => id === action.payload);
      return updataOrder(state, action.payload, -item.count);
      
    default:
      return state.shoppingcart;
  }
};

export default updateShoppingCart;