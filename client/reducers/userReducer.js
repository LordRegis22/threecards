import * as types from '../../constants/actionTypes';

const initialState = {
  newUsername: '',
  newPassword: '',
  username: '',
  password: '',
  loggedinUser: {},
};

const userReducer = (state = initialState, action) => {
  let updatedNewUsername;
  let updatedNewPassword;
  let updatedUsername;
  let updatedPassword;
  let updatedLoggedinUser;

  switch (action.type) {
    case types.SET_NEW_USERNAME:
      updatedNewUsername = action.payload;
      return { ...state, newUsername: updatedNewUsername };
    default:
      return state;
  }
};

export default userReducer;
