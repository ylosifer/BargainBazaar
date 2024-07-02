import React from 'react';
import "./css/NotFound.css";
const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">404 - Page Not Found</h1>
          <p className="text-center">The page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;