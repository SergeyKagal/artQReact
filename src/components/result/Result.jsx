import React from 'react';
import { Link } from 'react-router-dom';
import { rotes } from '../../data/routes';

function Result() {
  return (
    <div>
      <h3>Result</h3>
      <Link to={rotes.HOME}>Home</Link>
    </div>
  );
}

export default Result;
