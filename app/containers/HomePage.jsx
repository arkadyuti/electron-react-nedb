// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import Datastore from 'nedb';

import  '../css/app.global.css';
import  '../css/photon/photon.global.css';
import '../css/bootstrap-grid.global.css';

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
import SyncData from '../components/SyncData';

const dbStock = new Datastore({ filename: 'data/datasource.json', autoload: true });
const dbBilling = new Datastore({ filename: 'data/datasource-billing.json', autoload: true });
export class HomePage extends Component {
  constructor(props) {
		super(props);
	}
  componentWillMount() {
    this.props.history.push('/');
  }
  render() {
    let location = this.props.location.pathname;
    return (
      <div className="window">
        <Header {...this.props} />
        <div className="window-content">
          <div className="pane-group">
            <LeftMainNav {...this.props} />
            <Switch>
              <Route exact path='/' component={DashBoard}/>
              <Route path='/billing' render={()=><Billing {...this.props} dbBilling={dbBilling} dbStock= {dbStock} />} />
              <Route path='/oldBill' render={()=><OldBills {...this.props} dbBilling={dbBilling} />} />
              <Route path='/stock' render={()=><MyStock {...this.props} dbStock={dbStock} />} />
              <Route path="/entry" render={() =><AddEntry {...this.props} dbStock={dbStock} />} />
              <Route path="/sync" render={() =><SyncData {...this.props} dbBilling={dbBilling} dbStock= {dbStock} />} />
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
