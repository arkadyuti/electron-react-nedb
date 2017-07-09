// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OldBills extends Component {
	constructor(props) {
		super(props);
		this.state={
			oldBillWithID : []
		}
	}
	componentDidMount() {
		this.props.db.find({ _id:"gOJX7WYD3f9fnkoA"}, (err, data) => {
			this.setState({oldBillWithID : data})
			console.log(data)
    });
	}
	handleSearch = (e) => {
		console.log(this.refs.billID.value)
	}
	render() {
		// if(this.state.oldBillWithID)
		console.log("yehi wala",this.state.oldBillWithID.length)
		if(this.state.oldBillWithID.length<=0){
			console.log(this.state)
			return (
				<div className="pane padded-bottom-more" style={{padding:"40px"}}>
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-4 offset-sm-2 bill-search-wrapper">
								<div>
								<h2 className="search-bill-heading">Search by bill ID</h2>
								<span>Bill ID:</span>
								<input type="text" ref="billID"	className="form-control search-bill-id" />
								<button type="button" onClick={this.handleSearch} className="btn btn-form btn-default">Submit</button>
							</div>
							</div>
						</div>
					</div>
					
				</div>
			)
		}
		else {
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
}
          