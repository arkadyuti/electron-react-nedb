// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import  '../css/app.global.css';

import { showLeftNav } from '../actions';

// import Home from '../components/Home';
import Header from '../components/Header';
import LeftMainNav from '../components/LeftMainNav';
import MainForm from '../components/MainForm';

export class HomePage extends Component {
  constructor(props) {
		super(props);
	}
  render() {
    return (
      <div>
        <Header {...this.props} />
        <LeftMainNav {...this.props} />
        <MainForm {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    main : state.main.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showLeftNav : (leftNav) => dispatch(showLeftNav(leftNav)),
    dispatch,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
