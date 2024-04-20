import React from 'react';
import './Preloader.css';

export default function Preloader(props) {
  console.log(props);
  const { hide } = props;
  return <div className={`preloader${hide ? ' hide' : ''}`}>LOADING...</div>;
}
