import React, { useState } from 'react';
import Categories from '../categories/Categories';
import Game from '../game/Game';
import Result from '../result/Result';

function Artquiz() {
  const [isCategorySelected, setCategoryOnOff] = useState(false);
  const [categoryNumber, setCategoryNumber] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [questionNumbers, setQuestionNumbers] = useState([]);
  const categories = [{}];
  console.log(categoryNumber);
  return (
    <div>
      <h2>Artquiz</h2>
      {!isCategorySelected && (
        <Categories
          setCategoryOnOff={setCategoryOnOff}
          setCategoryNumber={setCategoryNumber}
          setQuestionNumbers={setQuestionNumbers}
        />
      )}
      {!!isCategorySelected && !isGameOver && (
        <Game
          categoryNumber={categoryNumber}
          isGameOver={isGameOver}
          setGameOver={setGameOver}
          questionNumbers={questionNumbers}
        />
      )}
      {!!isCategorySelected && !!isGameOver && <Result />}
    </div>
  );
}

export default Artquiz;
