import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as readingActions from '../../actions/readingActions';
import ReadingPanel from '../components/ReadingPanel.jsx';
import LoginContainer from './LoginContainer';

const mapStateToProps = (state) => ({ loggedinUser: state.user.loggedinUser });

const mapDispatchToProps = (dispatch) => ({
  setNewUsername: (input) => dispatch(userActions.setNewUsername(input)),
});

export class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Main Container</h1>
        <LoginContainer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
