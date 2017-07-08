// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
	constructor(props) {
		super(props);
    // this.handleClick = this.handleClick.bind(this);
	}
  handleClick() {
    console.log(this.props)
    this.props.showLeftNav(!this.props.main.leftNav);
  }
	render() {
    console.log(this.props)
		return (
			<header id="header" className="container-fluid header">
        <span className="nav-ico" onClick={this.handleClick.bind(this)}></span>
      </header>
		);
	}
}
