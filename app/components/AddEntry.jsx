// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Success from 'components/common/Success';
import EntryForm from 'components/common/EntryForm';

export default class AddEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notification: false
		}
	}

	_handleFormData = (e, refs) => {
		let _this = this;
		const { state } = this.__el;

		this.props.dbStock.insert(state, function (err, data) {   // Callback is optional
			console.log("Data Inserted", data, err);
			_this.setState({ notification: true });
			setTimeout(_this.removeNotification, 3000);
		});
		document.forms[0].reset();
	};
	removeNotification = () => {
		this.setState({ notification: false })
	}
	render() {
		const productCatagoryOptions = [
			{ label: 'one', value: 1 }, { label: 'two', value: 2 }
		]
		console.log(this.state.notification)
		return (
			<div className="pane padded-bottom-more entry-form">
				<EntryForm
					notification={this.state.notification ? "Data inserted" : ""}
					productCatagoryOptions={productCatagoryOptions}
					onSubmit={this._handleFormData}
					defaultProductCatagorySelectedOption={2}
					ref={c => { this.__el = c; return this.__el; }}
				/>
			</div>
		);
	}
}
