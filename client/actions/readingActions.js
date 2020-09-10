import * as types from '../constants/actionTypes';

export const deal = (newCards) => ({ type: types.DEAL, payload: newCards });

export const setQuestion = (question) => ({
  type: types.SET_QUESTION,
  payload: question,
});

export const setAnswer = (answer) => ({
  type: types.SET_ANSWER,
  payload: answer,
});

export const setNotes = (input) => ({
  type: types.SET_NOTES,
  payload: input,
});

export const saveReading = (reading) => ({
  type: types.SAVE_READING,
  payload: reading,
});

export const cardsDealt = () => ({
  type: types.CARDS_DEALT,
});

export const showAnswer = () => ({
  type: types.SHOW_ANSWER,
});
