import React from 'react';

function PastReading(props) {
  const { answer, cards, date, notes, question, loggedinUser } = props.reading;

  const prettyDate = new Date(date).toLocaleDateString();

  function deleteReading(user, cards, answer, question, notes) {
    const reading = {};
    reading.user = user;
    reading.cards = cards;
    reading.question = question;
    reading.answer = answer;
    reading.notes = notes;
    reading.readingID = props.reading.readingID;

    fetch('/users/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reading),
    })
      .then((data) => data.json())
      .then((updatedUser) => {
        props.setLoggedinUser(updatedUser);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className='past-reading'>
      <div className='past-reading-first-row'>
        <div>
          <h5>{prettyDate}</h5>
        </div>
        <div>
          <img
            src={cards[0].imgUrl}
            className={cards[0].key > 77 ? 'past-card reversed' : 'past-card'}
          />
          <img
            src={cards[1].imgUrl}
            className={cards[1].key > 77 ? 'past-card reversed' : 'past-card'}
          />
          <img
            src={cards[2].imgUrl}
            className={cards[2].key > 77 ? 'past-card reversed' : 'past-card'}
          />
        </div>
        <div className='question-and-answer'>
          <div>
            <h4>{question}</h4>
          </div>
          <div>
            <h2>{answer}</h2>
          </div>
        </div>
        <div
          onClick={() =>
            deleteReading(props.loggedinUser, cards, answer, question, notes)
          }
          className='delete-reading'
        >
          X
        </div>
      </div>
      <p className='primary-keywords'>
        <em>
          <strong>Primary Keywords: </strong>
        </em>
        {cards[1].keywords}
      </p>
      <p className='secondary-keywords'>
        <em>
          <strong>Secondary Keywords: </strong>
        </em>
        {cards[0].keywords}, {cards[2].keywords}
      </p>
      <div className='past-reading-second-row'>
        <div>
          <strong>Notes: </strong>
          {notes}
        </div>
      </div>
    </div>
  );
}

export default PastReading;
