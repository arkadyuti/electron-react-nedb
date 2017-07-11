// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OldBills extends Component {
	constructor(props) {
		super(props);
		this.state={
			oldBillWithID : [],
			oldBillMultiple : []
		}
	}
	componentDidMount() {
	}
	handleSearchID = (e) => {
		console.log(this.refs.billID.value)
		this.props.db.find({ stateTimeStamp:this.refs.billID.value}, (err, data) => {
			this.setState({oldBillWithID : data})
			console.log("dbID",this.state.oldBillMultiple, this.state.oldBillWithID)
    });
	}
	handleSearchPhone = (e) => {
		console.log(this.refs.phoneNumber.value)
		this.props.db.find({ phoneNumber:this.refs.phoneNumber.value}, (err, data) => {
			if(data.length>1) {
				this.setState({oldBillMultiple : data})
			}else{
				this.setState({oldBillWithID : data})
			}
			console.log("db",data)
    });
	}
	handleMultipleBill = (e) => {
		this.props.db.find({ stateTimeStamp:e.currentTarget.id}, (err, data) => {
			this.setState({oldBillWithID : data})
			this.setState({oldBillMultiple : []})
			console.log("db",data)
    });
	}
	handleRefresh = (e) => {
		this.setState({oldBillWithID : []})
		this.setState({oldBillMultiple : []})
	}
	render() {
		// if(this.state.oldBillWithID)
		const renderTable = this.state.oldBillMultiple.map((l, index) => {
			var date = new Date(parseInt(l.stateTimeStamp));
      return (
        <tr key={index} onClick={this.handleMultipleBill} id={l.stateTimeStamp}>
          <td>{index + 1}</td>
          <td>{l.stateTimeStamp}</td>
          <td>{l.customerName}</td>
          <td>{l.phoneNumber}</td>
          <td>{date.toLocaleDateString ()}</td>
				</tr>
      );
    });
		if(this.state.oldBillMultiple.length>0){
			return(
				<div className="pane padded-bottom-more entry-form">
					<table className="table-striped padded-bottom-more">
						<thead>
							<tr>
								<th>SlNo</th>
								<th>Bill ID</th>
								<th>Customer Name</th>
								<th>Phone Number</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
							{renderTable}
						</tbody>
					</table>
				</div>
			)
		}
		if(this.state.oldBillWithID.length<=0){
			return (
				<div className="pane padded-bottom-more" style={{padding:"40px", paddingTop:"0"}}>
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-4 offset-sm-2 bill-search-wrapper">
								<h3 className="search-bill-heading">Search by Bill ID</h3>
								<span>Bill ID:</span>
								<input type="text" ref="billID"	className="form-control search-bill-id" defaultValue="1499630905924"/>
								<button type="button" onClick={this.handleSearchID} className="btn btn-form btn-default">Submit</button>
							</div>
						</div>
						<div className="row" style={{marginTop:"30px"}}>
							<div className="col-sm-4 offset-sm-2 bill-search-wrapper">
								<h3 className="search-bill-heading">Search by Phone Number</h3>
								<span>Phone Number:</span>
								<input type="text" ref="phoneNumber"	className="form-control search-bill-id" />
								<button type="button" onClick={this.handleSearchPhone} className="btn btn-form btn-default">Submit</button>
							</div>
						</div>
					</div>
					
				</div>
			)
		}
		else {
			const { address, customerName, stateTimeStamp, phoneNumber, productDetails } = (this.state && this.state.oldBillWithID) ? this.state.oldBillWithID[0] : "";
			const timeStamp = stateTimeStamp;
			var date = new Date(parseInt(timeStamp));
			console.log(address, customerName, phoneNumber, productDetails)
			return (
				<div className="pane padded-bottom-more" style={{padding:"40px"}}>
					<div className="reload-btn" onClick={this.handleRefresh}>New Search</div>
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
								{customerName} <br/> {address}
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
							<div className="billing-container">
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
          