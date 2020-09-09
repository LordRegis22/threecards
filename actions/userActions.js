import * as types from '../constants/actionTypes';

export const setNewUsername = (newUsername) => ({
  type: types.SET_NEW_USERNAME,
  payload: newUsername,
});

export const setNewPassword = (newPassword) => ({
  type: types.SET_NEW_PASSWORD,
  payload: newPassword,
});

export const setUsername = (username) => ({
  type: types.SET_USERNAME,
  payload: username,
});

export const setPassword = (password) => ({
  type: types.SET_PASSWORD,
  payload: password,
});

export const setNewNickname = (nickname) => ({
  type: types.SET_NEW_NICKNAME,
  payload: nickname,
});

export const setLoggedinUser = (user) => ({
  type: types.SET_LOGGEDIN_USER,
  payload: user,
});
