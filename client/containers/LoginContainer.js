import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import LoginPanel from '../components/LoginPanel.jsx';
import RegisterPanel from '../components/RegisterPanel.jsx';

const mapStateToProps = (state) => ({
  username: state.user.username,
  password: state.user.password,
  newUsername: state.user.newUsername,
  newPassword: state.user.newPassword,
  newNickname: state.user.newNickname,
});

const mapDispatchToProps = (dispatch) => ({
  setUsername: (input) => dispatch(userActions.setUsername(input)),
  setPassword: (input) => dispatch(userActions.setPassword(input)),
  setNewUsername: (input) => dispatch(userActions.setNewUsername(input)),
  setNewPassword: (input) => dispatch(userActions.setNewPassword(input)),
  setNewNickname: (input) => dispatch(userActions.setNewNickname(input)),
  setLoggedinUser: (input) => dispatch(userActions.setLoggedinUser(input)),
});

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      username,
      password,
      setUsername,
      setPassword,
      newUsername,
      newPassword,
      newNickname,
      setNewUsername,
      setNewPassword,
      setNewNickname,
      setLoggedinUser,
    } = this.props;

    return (
      <div className='login-container'>
        <LoginPanel
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setLoggedinUser={setLoggedinUser}
        />
        <RegisterPanel
          newUsername={newUsername}
          newPassword={newPassword}
          newNickname={newNickname}
          setNewUsername={setNewUsername}
          setNewPassword={setNewPassword}
          setNewNickname={setNewNickname}
          setLoggedinUser={setLoggedinUser}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
