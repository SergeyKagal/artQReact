import React, { useState } from 'react';
import { setImgUrl } from './question-img-url';
import './Game.css';
import Preloader from '../Preloader/Preloader';
import { rightAnswerNum } from './right-answer-num';
import { getVariants } from './get-variants';
import { images } from '../../data/img-data';

// const variants = [0, 1, 2, 3];

function Game(props) {
  const { categoryNumber, setGameOver } = props;
  const [questionNumberIndex, setQuestionNumberIndex] = useState(0);
  const { questionNumbers } = props;
  const [isImgLoaded, setImgLoaded] = useState(false);
  const variants = getVariants(
    rightAnswerNum(categoryNumber, questionNumbers[questionNumberIndex])
  );
  console.log(isImgLoaded);
  return (
    <div>
      <h3>Game</h3>
      <h4>Category number {categoryNumber + 1}</h4>
      <h4>Question number {questionNumberIndex + 1}</h4>
      <p>
        Question text {questionNumbers[questionNumberIndex]}
        <p>Кто является автором этой картины ?</p>
        {rightAnswerNum(categoryNumber, questionNumbers[questionNumberIndex])}
      </p>

      <img
        className={`question__image${isImgLoaded ? '' : ' hide'}`}
        src={setImgUrl(categoryNumber, questionNumbers[questionNumberIndex])}
        alt='question image'
        onLoad={() => {
          setImgLoaded(true);
        }}
      />
      <Preloader hide={isImgLoaded} />

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
              variant {images[variant].author}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Game;
