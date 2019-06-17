import React, { Fragment, Component } from 'react';

import './filter-panel.css';

export default class FilterPanel extends Component {

  buttons = [
    { name: 'toprated', label: 'Top Rated' },
    { name: 'title', label: 'Title' },
    { name: 'price', label: 'Price' }
  ]; 

  onSearchChange = (e) => {
    const term = e.target.value;
    this.props.onSearchChange(term);
  };

  render() {
    const { onSortChange, filter, searchTerm } = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;    
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button 
          key={name}
          className={`btn ${clazz}`}
          onClick={() => onSortChange(name)} >
          {label}
        </button>        
      );
    });

    return(
      <Fragment>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center'>       
          <div className='d-inline-block mb-3'>
            <div className='btn-group'>
              {buttons}
            </div>
          </div>
        </div>  
        < div className = 'col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center' >
          <div className='d-inline-block'>
            <form className='form-inline'>
              <input className='form-control mr-1 mb-3'
                name='search' 
                placeholder='Search'
                value={searchTerm}
                onChange={this.onSearchChange} />
            </form>
          </div>
        </div>          
      </Fragment>
    );
  };
}


