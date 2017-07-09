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
				<div onClick={this._handleBillingIconClick}>
					<div className="billing-icon cursor"></div>
					<div className="text-center">Billing</div>
				</div>
				<div onClick={this._handleOldBillingIconClick}>
					<div className="old-bill-icon cursor"></div>
					<div className="text-center">View Old Bill</div>
				</div>
				<div onClick={this._handleCartIconClick}>
					<div className="cart-icon cursor"></div>
					<div className="text-center">My Stock</div>
				</div>
				<div onClick={this._handleAddBillingIconClick}>
					<div className="add-bill-icon cursor"></div>
					<div className="text-center">Add Entry</div>
				</div>
      </div>
		);
	}
}
          