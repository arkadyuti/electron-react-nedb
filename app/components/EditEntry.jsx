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
		const formData = {};
		let _this = this;
		for (const field in this.refs) {
			formData[field] = this.refs[field].value;
		}

		this.props.dbStock.insert(formData, function (err, data) {   // Callback is optional
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
    console.log(dataToEdit)
    const productCatagoryOptions = [
			{ label : 'one', value: 1 }, { label : 'two', value: 2 }
		]
		return (
		  <div className="pane padded-bottom-more entry-form">
				<EntryForm
					productCatagoryOptions={productCatagoryOptions}
					onSubmit={this._handleFormData}
          {...dataToEdit}
				/>
				{this.state.notification && <Success message="Your entry added" />}
      </div>
		);
	}
}
          