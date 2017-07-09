// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OldBills extends Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		this.props.db.find({ _id:"gOJX7WYD3f9fnkoA"}, (err, data) => {
			this.setState({oldBillWithID : data})
			console.log(data)
    });
	}
	render() {
		// if(this.state.oldBillWithID)
		const { address, customerName, phoneNumber, productDetails } = (this.state && this.state.oldBillWithID) ? this.state.oldBillWithID[0] : "";
		const timeStamp = 1499614632323;
		var date = new Date(timeStamp);
		console.log(address, customerName, phoneNumber, productDetails)
		return (
		  <div className="pane padded-bottom-more" style={{padding:"40px"}}>
        <div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<h1>Your Buisness Name</h1>
							<p>Comapny Address</p>
							<div style={{right:"0px", top:"0", position:"absolute"}}>Image</div>
						</div>
					</div>
					<div className="row" style={{marginBottom:"25px"}}>
						<div className="col-sm-4">
							Sold to:
							{customerName} & {address}
						</div>
						<div className="col-sm-4">
						</div>
						<div className="col-sm-4">
							<h3 style={{margin: "0"}}>Tax Invoice</h3>
							<div>Invoice No : 00000</div>
							<div>Date: {date.toLocaleDateString ()}</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-2 billig-wrapper">
							<div className="bill-title"><strong>Product ID</strong></div>
						</div>
						<div className="col-sm-5 billig-wrapper">
							<div className="bill-title"><strong>Description</strong></div>
						</div>
						<div className="col-sm-1 billig-wrapper">
							<div className="bill-title"><strong>Quantity</strong></div>
						</div>
						<div className="col-sm-2 billig-wrapper">
							<div className="bill-title"><strong>Unit Price</strong></div>
						</div>
						<div className="col-sm-2 billig-wrapper">
							<div className="bill-title"><strong>Amount</strong></div>
						</div>
						{ productDetails && productDetails.map((value, index)=> 
						<div>
							<div className="col-sm-2 billig-wrapper">
								<div className="bill-details">{value.productID}</div>
							</div>
							<div className="col-sm-5 billig-wrapper">
								<div className="bill-details">{value.productDesc}</div>
							</div>
							<div className="col-sm-1 billig-wrapper">
								<div className="bill-details">{value.quantity}</div>
							</div>
							<div className="col-sm-2 billig-wrapper">
								<div className="bill-details">{value.unitPrice}</div>
							</div>
							<div className="col-sm-2 billig-wrapper">
								<div className="bill-details">{value.amount}</div>
							</div>
						</div>)}
						

						<div className="col-sm-2 billig-wrapper offset-sm-8">
							<div className="bill-details">Sub Total</div>
							<div className="bill-details">GST</div>
							<div className="bill-details">PST</div>
							<div className="bill-details">Invoice Total</div>
							<div className="bill-details">Freight</div>
							<div className="bill-details">Amount Paid</div>
							<div className="bill-details">Balance Due</div>
						</div>
						<div className="col-sm-2 billig-wrapper offset-sm-0">
							<div className="bill-details">2000</div>
							<div className="bill-details">2000</div>
							<div className="bill-details">2000</div>
							<div className="bill-details">2000</div>
							<div className="bill-details">2000</div>
							<div className="bill-details">2000</div>
							<div className="bill-details">2000</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<h3>Terms & Conditions</h3>
							<p>Terms here</p>
						</div>
					</div>
				</div>
      </div>
		);
	}
}
          