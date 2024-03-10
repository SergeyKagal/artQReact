import React from 'react';
import { Link } from 'react-router-dom';
import { rotes } from '../../data/routes';
import './home.scss';

function Home() {
  return (
    <main>
      <Link className='link' to={rotes.ART}>
        <button>Artist quiz</button>
      </Link>
      <Link className='link' to={rotes.PIC}>
        <button>Pictures quiz</button>
      </Link>
    </main>
  );
}

export default Home;
