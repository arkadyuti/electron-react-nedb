// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OldBills extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div className="pane padded-bottom-more" style={{padding:"40px"}}>
        <div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<h1>Your Buisness Name</h1>
							<p>Address</p>
							<div style={{right:"0px", top:"0", position:"absolute"}}>Image</div>
						</div>
					</div>
					<div className="row" style={{marginBottom:"25px"}}>
						<div className="col-sm-4">
							Sold to:
							Name & Address
						</div>
						<div className="col-sm-4">
						</div>
						<div className="col-sm-4">
							<h3 style={{margin: "0"}}>Tax Invoice</h3>
							<div>Invoice No : 00000</div>
							<div>Date: DD/MM/YYYY</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-2 billig-wrapper">
							<div className="bill-title"><strong>Product ID</strong></div>
							<div className="bill-details">Some</div>
						</div>
						<div className="col-sm-5 billig-wrapper">
							<div className="bill-title"><strong>Description</strong></div>
							<div className="bill-details">Some</div>
						</div>
						<div className="col-sm-1 billig-wrapper">
							<div className="bill-title"><strong>Quantity</strong></div>
							<div className="bill-details">Some</div>
						</div>
						<div className="col-sm-2 billig-wrapper">
							<div className="bill-title"><strong>Unit Price</strong></div>
							<div className="bill-details">Some</div>
						</div>
						<div className="col-sm-2 billig-wrapper">
							<div className="bill-title"><strong>Amount</strong></div>
							<div className="bill-details">Some</div>
						</div>
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
          