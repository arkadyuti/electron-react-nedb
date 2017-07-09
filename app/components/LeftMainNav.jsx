// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styles from './Home.css';
import  '../css/MainForm.global.css';

import Datastore from 'nedb';
const db = new Datastore({ filename: 'datasource/datafile', autoload: true });
export default class LeftMainNav extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="pane pane-sm sidebar">
				<nav className="nav-group">
					<h5 className="nav-group-title">Favorites</h5>
					<Link to="/" className={`nav-group-item ${this.props.location.pathname === '/' ? 'active' : ''}`}>
						<span className="icon icon-home"></span>
						Home
					</Link>
					<Link to="billing" className={`nav-group-item ${this.props.location.pathname === '/billing' ? 'active' : ''}`}>
						<span className="icon icon-print"></span>
						Billing
					</Link>
					<Link to="oldBill" className={`nav-group-item ${this.props.location.pathname === '/oldBill' ? 'active' : ''}`}>
						<span className="icon icon-newspaper"></span>
						View Old Bill
					</Link>
					<Link to="stock" className={`nav-group-item ${this.props.location.pathname === '/stock' ? 'active' : ''}`}>
						<span className="icon icon-basket"></span>
						My Stock
					</Link>
					<Link to="entry" className={`nav-group-item ${this.props.location.pathname === '/entry' ? 'active' : ''}`}>
						<span className="icon icon-pencil"></span>
						Add Entry
					</Link>
					<h5 className="nav-group-title">Advance</h5>
					<Link to="sync" className={`nav-group-item ${this.props.location.pathname === '/sync' ? 'active' : ''}`}>
						<span className="icon icon-picasa"></span>
						Sync with Server
					</Link>
				</nav>
			</div>
		)
		return (
			<nav id="leftMainNav" className="container-fluid lef-main-nav">
				{this.props.main.leftNav &&
				<div className="row">
					<div className="col-sm-12 nav-container">
						<ul>
							<li><Link to="/" className="nav-link">Home</Link></li>
							<li><Link to="/" className="nav-link">Billing</Link></li>
							<li><Link to="/" className="nav-link">My Stock</Link></li>
							<li><Link to="/" className="nav-link">Add Enry</Link></li>
						</ul>
					</div>
				</div>
				}
			</nav>
		);
	}
}
