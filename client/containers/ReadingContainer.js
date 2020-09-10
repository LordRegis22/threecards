import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as readingActions from '../actions/readingActions';
import ReadingPanel from '../components/ReadingPanel.jsx';
import PastReadingPanel from '../components/PastReadingPanel.jsx';

const mapStateToProps = (state) => ({
  loggedinUser: state.user.loggedinUser,
  cards: state.reading.cards,
  answer: state.reading.answer,
  question: state.reading.question,
  notes: state.reading.notes,
  displayAnswer: state.reading.displayAnswer,
});

const mapDispatchToProps = (dispatch) => ({
  setQuestion: (input) => dispatch(readingActions.setQuestion(input)),
  deal: (newCards) => dispatch(readingActions.deal(newCards)),
  setAnswer: (answer) => dispatch(readingActions.setAnswer(answer)),
  setNotes: (notes) => dispatch(readingActions.setNotes(notes)),
  saveReading: (reading) => dispatch(readingActions.saveReading(reading)),
  cardsDealt: () => dispatch(readingActions.cardsDealt()),
  showAnswer: () => dispatch(readingActions.showAnswer()),
});

export class ReadingContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      loggedinUser,
      setLoggedinUser,
      cards,
      deal,
      cardsDealt,
      answer,
      setAnswer,
      showAnswer,
      displayAnswer,
      question,
      setQuestion,
      notes,
      setNotes,
      saveReading,
    } = this.props;

    function shuffle() {
      const cards = [];
      while (cards.length <= 2) {
        let newNumber = Math.floor(Math.random() * 157);
        console.log(newNumber);
        if (
          cards.indexOf(newNumber) === -1 &&
          cards.indexOf(newNumber + 78) === -1 &&
          cards.indexOf(newNumber - 78) === -1
        ) {
          cards.push(newNumber);
        }
      }
      return cards;
    }

    function handleDeal() {
      const dealtCards = shuffle();
      deal(dealtCards);
      let score = 0;
      for (let i = 0; i < dealtCards.length; i++) {
        if (i !== 1 && dealtCards[i] < 78) {
          console.log('plus 1');
          score += 1;
        } else if (i === 1 && dealtCards[i] < 78) {
          console.log('plus 2');
          score += 2;
        }
      }
      console.log(score);
      let divineAnswer = '';
      if (score === 0) {
        divineAnswer = 'Definitely not';
      } else if (score === 1) {
        divineAnswer = 'Probably not';
      } else if (score === 2) {
        divineAnswer = '¯\\_(ツ)_/¯';
      } else if (score === 3) {
        divineAnswer = 'Probably!';
      } else {
        divineAnswer = 'Definitely!';
      }
      console.log(divineAnswer);
      setAnswer(divineAnswer);
      cardsDealt();
    }

    function bundleReading(user, cards, answer, question, notes) {
      const reading = {};
      reading.user = user;
      reading.cards = cards;
      reading.question = question;
      reading.answer = answer;
      reading.notes = notes;
      saveReading(reading);

      fetch('/users/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reading),
      })
        .then((data) => data.json())
        .then((updatedUser) => setLoggedinUser(updatedUser))
        .catch((err) => console.log(err));
    }

    return (
      <>
        <ReadingPanel
          keys={cards}
          showAnswer={showAnswer}
          displayAnswer={displayAnswer}
        ></ReadingPanel>
        <div className='reading-inputs'>
          <div className='button-row'>
            <button onClick={shuffle}>SHUFFLE</button>
            <button onClick={handleDeal}>DEAL</button>
          </div>
          <div className='text-fields'>
            <input
              placeholder='Question'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></input>
            <input
              placeholder='Notes'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></input>
          </div>
          <button
            onClick={() =>
              bundleReading(
                loggedinUser.username,
                cards,
                answer,
                question,
                notes
              )
            }
          >
            SAVE
          </button>
        </div>
        {loggedinUser.readings && (
          <PastReadingPanel pastReadings={loggedinUser.readings} />
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadingContainer);
