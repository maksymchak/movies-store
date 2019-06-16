import React from 'react';

import icon from './error.png';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
    </div>
  );
};

export default ErrorIndicator;