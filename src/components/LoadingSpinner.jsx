import React from 'react';
import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner" role="status" aria-label="Loading">
      <div className="spinner-circle"></div>
      <div className="spinner-text">Thinking...</div>
    </div>
  );
};

export default LoadingSpinner;
