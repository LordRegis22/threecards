import React from 'react';
import Card from './Card.jsx';

export default function ReadingPanel(props) {
  const { showAnswer, displayAnswer, answer, cardsDealt } = props;
  return (
    <>
      <div className='reading-panel'>
        <div className='card-container'>
          <Card
            cardNumber={props.keys[0]}
            showAnswer={showAnswer}
            cardsDealt={cardsDealt}
          />
          <div className='keywords'></div>
        </div>
        <div className='card-container'>
          <Card
            cardNumber={props.keys[1]}
            showAnswer={showAnswer}
            cardsDealt={cardsDealt}
          />
          <div className='keywords'></div>
        </div>
        <div className='card-container'>
          <Card
            cardNumber={props.keys[2]}
            showAnswer={showAnswer}
            cardsDealt={cardsDealt}
          />
          <div className='keywords'></div>
        </div>
      </div>

      <div className='divine-answer'>
        {displayAnswer === 3 && <h1 className='answer'>{answer}</h1>}
      </div>
    </>
  );
}
