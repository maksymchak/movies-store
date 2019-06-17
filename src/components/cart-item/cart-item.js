import React, { Component } from 'react';
import { connect } from 'react-redux';

import { movieAddedToCart, movieRemovedFromCart, allmoviesRemovedFromCart} from '../../actions';

import './cart-item.css';

class CartItem extends Component {
  render() {
    const { idx, onIncrease, onDecrease, onDelete } = this.props;
    const { id, title, count, total } = this.props.item;

    return(
      <div className="row align-items-center cart-item-container">
        <div className="cart-inner-item col-xs-12 col-sm-12 col-md-12 col-lg-2">
          {idx + 1}
        </div>
        <div id="product-name" className="cart-inner-item col-xs-12 col-sm-12 col-md-12 col-lg-4">
          {title}
        </div>
        <div className="cart-inner-item col-xs-12 col-sm-12 col-md-12 col-lg-3">
          <div className="count-maneger">
            <div onClick={() => onDecrease(id)} 
                 className="decrement">
              <i className="fas fa-minus"></i>
            </div>
            <div className="counter">{count}</div>
            <div onClick={() => onIncrease(id)} 
                 className="increment">
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div id="price" className="cart-inner-item col-xs-12 col-sm-12 col-md-12 col-lg-2">
          $ {total}
        </div>
        <div id="delete-item" className="cart-inner-item col-xs-12 col-sm-12 col-md-12 col-lg-1">
          <i onClick={() => onDelete(id)} className="fas fa-trash mt-0"></i>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onIncrease: movieAddedToCart,
  onDecrease: movieRemovedFromCart,
  onDelete: allmoviesRemovedFromCart
};

export default connect(null, mapDispatchToProps)(CartItem);


