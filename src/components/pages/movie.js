import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { movieAddedToCart } from '../../actions';

const Movie = ({ match, movies, onAddedToCart }) => {

  const movie = movies.find(movie => movie.slug === match.params.movie );
  const { id, cover, title, price   } = movie;

  return(
    <div className="container details-container">
      <div className="row">
        <div className="col-10 col-md-6 mx-auto img-container text-center">
          <img className="img-fluid" src={cover} alt={"product "+ id} />
        </div>
        <div className="col-10 col-md-6 mx-auto desc-container">
          <div className="product-headings">
            <h3 className="product-title">{title}</h3>
            <p className="text-capitalize"> Price  
              <span className="price-number">${price}</span>
            </p>
          </div>
          <div className="product-info-container">
            <h5 className="product-info-heading text-center">Description</h5>
            <p className="product-info">Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.</p>
          </div>
          <div className="btn-container align-items-end d-flex justify-content-center detail-btn">
            <Link to="/movies-store">
              <button className = "btn-back-to-product detail-button-back">
                Back To products
              </button>
            </Link>
            <button className="btn-add-to-cart detail-button-add" 
                    onClick={() => onAddedToCart(id)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ movielist: { movies }}) => {
  return { movies };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedToCart: (id) => dispatch(movieAddedToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);