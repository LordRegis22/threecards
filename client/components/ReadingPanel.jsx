import React from 'react';
import Card from './Card.jsx';

export default function ReadingPanel(props) {
  return (
    <div className='reading-panel'>
      <Card cardNumber={props.keys[0]} />
      <Card cardNumber={props.keys[1]} />
      <Card cardNumber={props.keys[2]} />
    </div>
  );
}
