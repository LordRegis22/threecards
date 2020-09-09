import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import LoginPanel from '../components/LoginPanel.jsx';
import RegisterPanel from '../components/RegisterPanel.jsx';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setUsername: (input) => dispatch(userActions.setUsername(input)),
  setPassword: (input) => dispatch(userActions.setPassword(input)),
  setNewUsername: (input) => dispatch(userActions.setNewUsername(input)),
  setNewPassword: (input) => dispatch(userActions.setNewPassword(input)),
  setNewNickname: (input) => dispatch(userActions.setNewNickname(input)),
});

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      setUsername,
      setPassword,
      setNewUsername,
      setNewPassword,
      setNewNickname,
    } = this.props;

    return (
      <>
        <h1>Login Container</h1>
        <LoginPanel setUsername={setUsername} setPassword={setPassword} />
        <RegisterPanel
          setNewUsername={setNewUsername}
          setNewPassword={setNewPassword}
          setNewNickname={setNewNickname}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
