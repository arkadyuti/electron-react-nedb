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
