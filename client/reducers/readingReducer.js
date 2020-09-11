import * as types from '../constants/actionTypes';

const initialState = {
  question: '',
  cards: [],
  answer: '',
  notes: '',
  cardsDealt: false,
  displayAnswer: 0,
};

const readingReducer = (state = initialState, action) => {
  let updatedQuestion;
  let updatedCards;
  let updatedAnswer;
  let updatedNotes;
  let updatedReadings;
  let updatedCardsDealt;
  let updatedDisplayAnswer = 0;

  switch (action.type) {
    case types.DEAL:
      updatedCards = action.payload;
      updatedCardsDealt = true;
      return { ...state, cards: updatedCards, cardsDealt: updatedCardsDealt };
    case types.SET_ANSWER:
      updatedAnswer = action.payload;
      return { ...state, answer: updatedAnswer };
    case types.SET_QUESTION:
      updatedQuestion = action.payload;
      return { ...state, question: updatedQuestion };
    case types.SET_NOTES:
      updatedNotes = action.payload;
      return { ...state, notes: updatedNotes };
    case types.SAVE_READING:
      return initialState;
    case types.SHOW_ANSWER:
      updatedDisplayAnswer = state.displayAnswer + 1;
      return { ...state, displayAnswer: updatedDisplayAnswer };
    default:
      return state;
  }
};

export default readingReducer;
