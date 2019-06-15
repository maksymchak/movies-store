import React from 'react';

import icon from '../error-indicator/404.png';

const NotFound = () => {
  return(
    <div className="container text-center">
      <img src={icon} alt="error icon"/>
    </div>
  );
}

export default NotFound;