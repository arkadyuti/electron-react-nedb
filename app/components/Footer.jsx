// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
    return (
      <footer className="toolbar toolbar-footer">
        <h1 className="title">Footer</h1>
      </footer>
    )
	}
}
