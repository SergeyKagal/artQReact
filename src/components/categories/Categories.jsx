import React from 'react';
import { categories } from '../../data/artcategories';

function Categories(props) {
  console.log(props);

  return (
    <>
      <h2>Select catigorie</h2>
      <ul>
        {categories.map((e) => (
          <li key={e.number}>
            <button
              onClick={() => {
                props.setCategoryNumber(e.number);
                props.setCategoryOnOff(true);
              }}
            >
              {e.number}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
