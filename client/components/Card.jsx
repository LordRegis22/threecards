import React from 'react';

export default function Card(props) {
  function flipCard(e, key) {
    fetch(`/reading/${key}`)
      .then((data) => data.json())
      .then((result) => {
        if (result.key > 78) {
          e.classList.add('reversed');
        }
        e.setAttribute('src', result.imgUrl);
      })
      .catch((err) => console.log(err));
  }
  return (
    <img
      src='/images/back.png'
      onClick={(e) => flipCard(e.target, props.cardNumber)}
      className='card'
    ></img>
  );
}
