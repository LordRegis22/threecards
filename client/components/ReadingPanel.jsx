import React from 'react';
import Card from './Card.jsx';

export default function ReadingPanel(props) {
  const { showAnswer, displayAnswer } = props;
  return (
    <>
      <div className='reading-panel'>
        <div className='card-container'>
          <Card cardNumber={props.keys[0]} showAnswer={showAnswer} />
          <div className='keywords'></div>
        </div>
        <div className='card-container'>
          <Card cardNumber={props.keys[1]} showAnswer={showAnswer} />
          <div className='keywords'></div>
        </div>
        <div className='card-container'>
          <Card cardNumber={props.keys[2]} showAnswer={showAnswer} />
          <div className='keywords'></div>
        </div>
      </div>
      <div className='divine-answer'>
        {displayAnswer === 3 && <div className='answer'>ANSWSER!!</div>}
      </div>
    </>
  );
}
