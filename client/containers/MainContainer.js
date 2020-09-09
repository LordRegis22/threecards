import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as readingActions from '../../actions/readingActions';
import ReadingPanel from '../components/ReadingPanel.jsx';
import LoginPanel from '../components/LoginPanel.jsx';

const mapStateToProps = (state) => ({ loggedinUser: state.user.loggedinUser });

const mapDispatchToProps = (dispatch) => ({
  setNewUsername: (input) => dispatch(userActions.setNewUsername(input)),
});

export class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { loggedinUser, setNewUsername } = this.props;
    return (
      <>
        <LoginPanel setNewUsername={setNewUsername} />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
