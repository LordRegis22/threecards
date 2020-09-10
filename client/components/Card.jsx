import React from 'react';

export default function Card(props) {
  function flipCard(e, key) {
    fetch(`/reading/${key}`)
      .then((data) => data.json())
      .then((result) => {
        props.showAnswer();
        e.classList.add('flipping');
        setTimeout(() => e.setAttribute('src', result.imgUrl), 500);
        if (result.key > 78) {
          setTimeout(() => e.classList.add('reversed'), 500);
        }
        const keywords = e.nextElementSibling;
        keywords.innerText = result.keywords;
        keywords.style.opacity = 1;
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
