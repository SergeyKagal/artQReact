import React from 'react';
import { categories } from '../../data/artcategories';
import { randomizer } from './randomizer';
import './Categories.css';

function Categories(props) {
  return (
    <>
      <h2>Select catigorie</h2>
      <ul>
        {categories.map((e) => (
          <li key={e.number}>
            <button
              className='category__button'
              onClick={() => {
                props.setCategoryNumber(e.number);
                props.setCategoryOnOff(true);
                props.setQuestionNumbers(randomizer());
              }}
            >
              {e.number + 1}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
