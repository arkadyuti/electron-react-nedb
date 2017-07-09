// @flow
import React, { Component } from 'react';

export default class DashBoard extends Component {
	constructor(props) {
		super(props);
	}

	_handleBillingIconClick = () => {
		this.props.history.push('/billing');
	}

	_handleOldBillingIconClick = () => {
		this.props.history.push('/oldBill');
	}

	_handleCartIconClick = () => {
		this.props.history.push('/stock');
	}

	_handleAddBillingIconClick = () => {
		this.props.history.push('/entry');
	}

	render() {
		return (
		  <div className="pane padded-bottom-more flex-space-around">
				<div onClick={this._handleBillingIconClick} className="cursor">
					<div className="billing-icon"></div>
					<div className="text-center">Billing</div>
				</div>
				<div onClick={this._handleOldBillingIconClick} className="cursor">
					<div className="old-bill-icon"></div>
					<div className="text-center">View Old Bill</div>
				</div>
				<div onClick={this._handleCartIconClick} className="cursor">
					<div className="cart-icon"></div>
					<div className="text-center">My Stock</div>
				</div>
				<div onClick={this._handleAddBillingIconClick} className="cursor">
					<div className="add-bill-icon"></div>
					<div className="text-center">Add Entry</div>
				</div>
      </div>
		);
	}
}
          