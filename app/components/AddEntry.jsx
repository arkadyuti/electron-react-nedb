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
	
	_handleFormData = (e) => {
		const formData = {};
		let _this = this;
		for (const field in this.refs) {
			formData[field] = this.refs[field].value;
		}
		console.log(formData);

		this.props.dbStock.insert(formData, function (err, data) {   // Callback is optional
			console.log("Data Inserted", data, err);
			_this.setState({ notification: true})
		});
		document.forms[0].reset();
	};

	render() {
		const productCatagoryOptions = [
			{ label : 'one', value: 1 }, { label : 'two', value: 2 }
		]
		return (
		  <div className="pane padded-bottom-more entry-form">
				<EntryForm
				productCatagoryOptions={productCatagoryOptions}
				defaultProductCatagorySelectedOption={2}
				/>
				{this.state.notification && <Success message="Your entry added" />}
      </div>
		);
	}
}
          