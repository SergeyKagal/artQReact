import React, { useState } from 'react';
import { setImgUrl } from './question-img-url';
import './Game.css';

const variants = [0, 1, 2, 3];

function Game(props) {
  const { categoryNumber, setGameOver } = props;
  const [questionNumber, setQuestionNumber] = useState(0);
  console.log('category ', categoryNumber);
  return (
    <div>
      <h3>Game</h3>
      <h4>Category number {categoryNumber}</h4>
      <h4>Question number {questionNumber}</h4>
      <p>Question text</p>
      <img
        className='question__image'
        src={setImgUrl(categoryNumber, questionNumber)}
        alt='question image'
      />
      <h4>Answers</h4>
      <ul className='answers'>
        {variants.map((variant) => (
          <li key={variant}>
            <button
              onClick={() =>
                questionNumber < 9
                  ? setQuestionNumber(questionNumber + 1)
                  : setGameOver(true)
              }
            >
              variant {variant}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Game;
