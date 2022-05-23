import React from 'react';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='msg-container'>
        <h1 className='title'>404</h1>
        <p className='subtitle'>oops! Page not found</p>
        <a className="ancla" href='/'>Return Home</a>
      </div>
    </div>
  );
}

export default NotFound;