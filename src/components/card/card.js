import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './card.css';

const Card = ({movie, onAddedToCart}) => {
  const { title, date, price, cover, star, slug} = movie;

  return (
    <Fragment>
      <div className="col-10 mx-auto my-3 col-lg-4 col-md-6 col-sm-6 card-wrapper">
        <div className="card">
          <div className="card-header">
            <Link to={`/movies-store/${slug}`}>
              <img className="card-img" src={cover} alt="Card" />
            </Link>
          </div>  
          <div className="card-body">
            <div className="title-box">
              <h1 className="card-title">{title}</h1>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6 metadata">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <p>{`${star}/10`}</p>
                </div>
                <div className="col-6 metadata">Release {date}</div>
              </div>
            </div>
            <div className = "d-flex justify-content-between" >
              <p className="price">${price}</p>
              <button className="btn btn-danger mt-3 card-btn"
                      onClick={onAddedToCart}>
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>  
            </div>    
            <a className="trailer-preview" href={`https://www.youtube.com/results?search_query=${title}+trailer`} target="new">
              <i className="fa fa-play" aria-hidden="true"></i>
            </a>
          </div>            
        </div>
      </div>
    </Fragment>
  );
}

export default Card;