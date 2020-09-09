import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReadingPanel from '../components/ReadingPanel.jsx';
import LoginPanel from '../components/LoginPanel.jsx';

export class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { loggedinUser } = this.props;
    return <>{loggedinUser ? <ReadingPanel /> : <LoginPanel />}</>;
  }
}

const mapStateToProps = (state) => ({ loggedinUser: state.users.loggedinUser });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
