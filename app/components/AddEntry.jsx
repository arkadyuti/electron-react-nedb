// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class AddEntry extends Component {
	constructor(props) {
		super(props);
	}
	
	_handleFormData = (e) => {
		const formData = {};
		for (const field in this.refs) {
			formData[field] = this.refs[field].value;
		}
		console.log(formData);

		this.props.db.insert(formData, function (err, data) {   // Callback is optional
			console.log("Data Inserted", data, err);
		});
	}

	render() {
		console.log(this.props)
		return (
		  <div className="pane padded-bottom-more entry-form">
        <form className="" onSubmit={this._handleFormData}>
					<div className="form-group">
						<label>Sl No.</label>
						<input type="text" ref="slNo"	className="form-control" placeholder="Sl No." />
					</div>
					<div className="form-group">
						<label>Date</label>
						<input type="date"ref="date" className="form-control" placeholder="Date"	/>
					</div>
					<div className="form-group">
						<label>Supplier</label>
						<input type="text" className="form-control" placeholder="Supplier" ref="supplier"
						/>
					</div>
					<div className="form-group">
						<label>Product ID</label>
						<input type="text" className="form-control" ref= "productID" placeholder="Product ID" />
					</div>
					<div className="form-group">
						<label>Product Name</label>
						<input type="text" className="form-control" ref= "productName" placeholder="Product Name" />
					</div>
					<div className="form-group">
						<label>Product Description</label>
						<textarea type="text" className="form-control" ref= "productDescription" placeholder="Product Description" />
					</div>
					<div className="form-group">
						<label>Product Catagory</label>
						<select className="form-control" ref= "productCatagory">
							<option value="1" >Option one</option>
							<option value="2" >Option two</option>
							<option value="3" >Option three</option>
							<option value="4" >Option four</option>
							<option value="5" >Option five</option>
							<option value="6" >Option six</option>
							<option value="7" >Option seven</option>
							<option value="8" >Option eight</option>
						</select>
					</div>
					<div className="form-group">
						<label>Quantity</label>
						<input type="text" className="form-control"  ref="quantity" placeholder="Quantity" />
					</div>
					<div className="form-group">
						<label>Price</label>
						<input type="text" className="form-control"  ref="price" placeholder="Price" />
					</div>
					<div className="form-actions">
						<button type="reset" className="btn btn-form btn-default">Cancel</button>
						<button type="submit" className="btn btn-form btn-primary">OK</button>
					</div>
				</form>
      </div>
		);
	}
}
          