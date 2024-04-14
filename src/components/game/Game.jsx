import React, { useState } from 'react';
import { setImgUrl } from './question-img-url';
import './Game.css';

const variants = [0, 1, 2, 3];

function Game(props) {
  const { categoryNumber, setGameOver } = props;
  const [questionNumberIndex, setQuestionNumberIndex] = useState(0);
  const { questionNumbers } = props;
  const [isImgLoaded, setImgLoaded] = useState(false);
  console.log('category ', categoryNumber);
  console.log(questionNumbers);
  return (
    <div>
      <h3>Game</h3>
      <h4>Category number {categoryNumber + 1}</h4>
      <h4>Question number {questionNumberIndex + 1}</h4>
      <p>Question text {questionNumbers[questionNumberIndex]}</p>
      <img
        className='question__image'
        src={setImgUrl(categoryNumber, questionNumbers[questionNumberIndex])}
        alt='question image'
        onLoad={() => {
          setImgLoaded(true);
        }}
      />
      <h4>Answers</h4>
      <ul className='answers'>
        {variants.map((variant) => (
          <li key={variant}>
            <button
              disabled={!isImgLoaded}
              onClick={() => {
                setImgLoaded(false);
                questionNumberIndex < 9
                  ? setQuestionNumberIndex(questionNumberIndex + 1)
                  : setGameOver(true);
              }}
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
