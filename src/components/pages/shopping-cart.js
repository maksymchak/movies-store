import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item';

class ShoppingCart extends Component {

  render() {
    const { items } = this.props;
    const orderTotal = items.reduce((sum, item) => {
      return sum + item.total;
    }, 0);

    const empty = <h4 className="empty-cart">No item in cart</h4>;
    const elements = (
      <Fragment>
        {items.map((item, idx) => <CartItem key={item.id} item={item} idx={idx}></CartItem>)}
        <div className="cart-footer row align-items-end justify-content-between">
          <div className="total">
            <p>Total: <span>$ {orderTotal}</span> </p>
          </div>
        </div>        
      </Fragment>
    );

    const hasData = (items.length > 0) ? elements : empty;

    return(
      <div className="container shop-cart">
        <h5 className="text-title">
          Shopping Cart
        </h5>
        <div className="items-container">
          {hasData}
        </div>
      </div>  
    );
  }
};

const mapStateToProps = ({ shoppingcart: { cartItems }}) => {
  return { items: cartItems };
};

export default connect(mapStateToProps, null)(ShoppingCart);