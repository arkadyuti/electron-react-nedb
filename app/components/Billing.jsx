// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Datastore from 'nedb';

const db = new Datastore({ filename: 'data/datasource-billing', autoload: true });

export default class Billing extends Component {
	constructor(props) {
		super(props);
	}
	_handleFormData = (e) => {
		const formData = {};
		for (const field in this.refs) {
			formData[field] = this.refs[field].value;
		}
		console.log(formData);

		db.insert(formData, function (err, data) {   // Callback is optional
			console.log("Data Inserted", data, err);
		});
	}
	calculateAmount = (e) => {
		this.refs.amount.value = this.refs.unitPrice.value * this.refs.quantity.value;
	}
	render() {
		return (
		  <div className="pane padded-bottom-more entry-form">
        <form className="" onSubmit={this._handleFormData}>
					<div className="form-group">
						<label>Customer Name</label>
						<input type="text" ref="customerName"	className="form-control" placeholder="Customer Name" />
					</div>
					<div className="form-group">
						<label>Phone Number</label>
						<input type="tel" ref="phoneNumber"	className="form-control" placeholder="Phone Number" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<textarea type="text" ref="address"	className="form-control" placeholder="Address" />
					</div>
					<div className="form-group">
						<label>Credit Term</label>
						<select className="form-control" ref= "creditTerm">
							<option value="cash" >Cash</option>
							<option value="card" >Card</option>
							<option value="others" >Others</option>
						</select>
					</div>
					<div className="form-group">
						<label>Attention to</label>
						<input type="text" ref="attentionTo"	className="form-control" placeholder="Attention To" />
					</div>
					<div className="form-group">
						<label>Product ID</label>
						<input type="text" ref="productID"	className="form-control" placeholder="Product ID" />
					</div>
					<div className="form-group">
						<label>Description</label>
						<input type="text" ref="productDesc"	className="form-control" placeholder="Product Description" />
					</div>
					<div className="form-group">
						<label>Quantity</label>
						<input type="text" onChange={this.calculateAmount} ref="quantity"	className="form-control" placeholder="Quantity" />
					</div>
					<div className="form-group">
						<label>Unit Price</label>
						<input type="text" onChange={this.calculateAmount} ref="unitPrice"	className="form-control" placeholder="Amount" />
					</div>
					<div className="form-group">
						<label>Amount</label>
						<input type="text" ref="amount"	className="form-control" placeholder="Total Amount" />
					</div>
					<div className="form-actions">
						<div className="btn btn-form btn-warning">Add Another</div>
						<button type="reset" className="btn btn-form btn-default">Reset</button>
						<button type="submit" className="btn btn-form btn-primary">Submit</button>
					</div>
				</form>
      </div>
		);
	}
}
          