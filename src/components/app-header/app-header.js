import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './app-header.css';

const AppHeader = ({ items }) => {

  const count = items.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm d-flex px-sm-5 nav-header">
        <ul className="navbar-nav  ">
          <li className="nav-item ml-5">
            <i className="fas fa-video navbar-brand"></i>
          </li>    
          <li className="nav-item ml-5">
            <Link to="/movies/" className="nav-link">
              Movies
            </Link>
          </li>                     
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>            
        </ul>
        <Link to="/cart" className="ml-auto col-xs-12">
          <button className="cart-button cart-icon">
            <i className="fas fa-shopping-cart" />
            <span className="badge badge-primary">{count}</span>
          </button>
        </Link>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = ({ shoppingcart: { cartItems }}) => {
  return { items: cartItems };
};

export default connect(mapStateToProps, null)(AppHeader);
