import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import * as readingActions from '../actions/readingActions';
import ReadingContainer from '../containers/ReadingContainer';
import LoginContainer from './LoginContainer';

const mapStateToProps = (state) => ({ loggedinUser: state.user.loggedinUser });

const mapDispatchToProps = (dispatch) => ({
  setLoggedinUser: (userInfo) =>
    dispatch(userActions.setLoggedinUser(userInfo)),
  logout: () => dispatch(userActions.logout()),
});

export class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { loggedinUser, setLoggedinUser, logout } = this.props;
    return (
      <>
        <header className='frame'>
          {loggedinUser.nickname && <p>Welcome, {loggedinUser.nickname}</p>}
          {loggedinUser.username && (
            <button className='logout' onClick={logout}>
              Logout
            </button>
          )}
        </header>
        {loggedinUser.username ? (
          <ReadingContainer
            loggedinUser={loggedinUser}
            setLoggedinUser={setLoggedinUser}
          />
        ) : (
          <LoginContainer
            setLoggedinUser={setLoggedinUser}
            loggedinUser={loggedinUser}
          />
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
