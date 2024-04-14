import React, { useState } from 'react';
import { setImgUrl } from './question-img-url';

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
        src={setImgUrl(categoryNumber, questionNumber)}
        alt='question image'
      />
      <h4>Answers</h4>
      <ol>
        {variants.map((variant) => (
          <li key={variant}>
            <button
              onClick={() =>
                questionNumber < 10
                  ? setQuestionNumber(questionNumber + 1)
                  : setGameOver(true)
              }
            >
              variant {variant}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Game;
