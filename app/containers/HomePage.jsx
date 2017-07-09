// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import  '../css/app.global.css';
import  '../css/photon/photon.global.css';
// import './css/bootstrap.global.css';
import { Switch, Route } from 'react-router';

import { showLeftNav } from '../actions';

// import Home from '../components/Home';
import Header from '../components/Header';
import LeftMainNav from '../components/LeftMainNav';
import DashBoard from '../components/DashBoard';
import AddEntry from '../components/AddEntry';
import Billing from '../components/Billing';
import OldBills from '../components/OldBills';
import MyStock from '../components/MyStock';
import Footer from '../components/Footer';

export class HomePage extends Component {
  constructor(props) {
		super(props);
	}
  render() {
    // console.log(this.props.location.pathname )
    let location = this.props.location.pathname;
    return (
      <div className="window">
        <Header {...this.props} />
        <div className="window-content">
          <div className="pane-group">
            <LeftMainNav {...this.props} />
            <Switch>
              <Route exact path='/' component={DashBoard}/>
              <Route path='/billing' component={Billing}/>
              <Route path='/oldBill' component={OldBills}/>
              <Route path='/stock' component={MyStock}/>
              <Route path='/entry' component={AddEntry}/>
            </Switch>
          </div>
        </div>
        <Footer {...this.props} />
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
