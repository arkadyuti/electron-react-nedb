// @flow
import React, { Component } from 'react';

import Success from 'components/common/Success';
import EntryForm from 'components/common/EntryForm';

export default class EditEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
      notification: false,
      productData: []
		}
  }
  
  componentDidMount() {
    const { dbStock } = this.props;
    dbStock.find({}, (err, data) => {
      const gotData = data;
      this.setState({
        productData: gotData
      });
    });
  }
	
	_handleFormData = (e) => {
    let _this = this;
		const { state } = this.__el;

		this.props.dbStock.insert(state, function (err, data) {   // Callback is optional
			console.log("Data Inserted", data, err);
			_this.setState({ notification: true})
		});
		document.forms[0].reset();
	};

	render() {
    const { state, props } = this;
    const { productData } = state;
    let { clickedEditButton = 0 } = props;
    console.log(clickedEditButton)
    const dataToEdit = productData[clickedEditButton];
    const productCatagoryOptions = [
			{ label : 'one', value: 1 }, { label : 'two', value: 2 }
		]
		return (
		  <div className="pane padded-bottom-more entry-form">
				{dataToEdit && (
          <EntryForm
            productCatagoryOptions={productCatagoryOptions}
            onSubmit={this._handleFormData}
            {...dataToEdit}
            ref={c => { this.__el = c; return this.__el; }}
          />
        )}
        
				{this.state.notification && <Success message="Your entry added" />}
      </div>
		);
	}
}
          