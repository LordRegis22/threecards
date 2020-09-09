import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import styles from './scss/application.scss';

render(<App />, document.getElementById('root'));

const testButton = document.getElementById('test');
testButton.addEventListener('click', deal);
function deal() {
  const imageBox = document.getElementById('images');
  for (let i = 0; i < 3; i++) {
    const card = document.createElement('IMG');
    card.setAttribute('src', `/images/back.png`);
    card.addEventListener('click', testClick);
    imageBox.appendChild(card);
  }
  const cards = document.querySelector('.card');
}
function testClick(e) {
  fetch('/createCard', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({ key: 98 }),
  })
    .then((data) => data.json())
    .then((result) => {
      if (result.key > 78) {
        e.target.classList.add('reversed');
      }
      e.target.setAttribute('src', result.imgUrl);
    })
    .catch((err) => console.log(err));
}
