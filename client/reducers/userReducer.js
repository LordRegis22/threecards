import * as types from '../constants/actionTypes';

const initialState = {
  username: '',
  password: '',
  newUsername: '',
  newPassword: '',
  newNickname: '',
  loggedinUser: {},
};

const userReducer = (state = initialState, action) => {
  let updatedNewUsername;
  let updatedNewPassword;
  let updatedNewNickname;
  let updatedUsername;
  let updatedPassword;
  let updatedLoggedinUser;

  switch (action.type) {
    case types.SET_USERNAME:
      updatedUsername = action.payload;
      return { ...state, username: updatedUsername };
    case types.SET_PASSWORD:
      updatedPassword = action.payload;
      return { ...state, password: updatedPassword };
    case types.SET_NEW_USERNAME:
      updatedNewUsername = action.payload;
      return { ...state, newUsername: updatedNewUsername };
    case types.SET_NEW_PASSWORD:
      updatedNewPassword = action.payload;
      return { ...state, newPassword: updatedNewPassword };
    case types.SET_NEW_NICKNAME:
      updatedNewNickname = action.payload;
      return { ...state, newNickname: updatedNewNickname };
    case types.SET_LOGGEDIN_USER:
      updatedLoggedinUser = action.payload;
      return {
        ...state,
        updatedNewUsername: '',
        updatedNewPassword: '',
        updatedNewNickname: '',
        updatedUsername: '',
        updatedPassword: '',
        loggedinUser: updatedLoggedinUser,
      };
    case types.LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default userReducer;
