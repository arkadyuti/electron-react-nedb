// @flow
import React, { Component } from 'react';

import EditEntry from 'components/EditEntry';

export default class MyStock extends Component {
	constructor(props) {
    super(props);
    this.state = {
      productData: [],
      showEditOption: false,
      clickedEditButton: void 0
    };
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

  _handleClick = (e, index) => {
    this.setState({
      clickedEditButton: index,
      showEditOption: true
    });
  };

	render() {
    const { state, props } = this;
    const { productData, showEditOption, clickedEditButton } = state;

    const renderTable = productData.map((l, index) => {
      const args = Object.assign({}, l, {
        key: index,
        id: index + 1,
        onClick: (e) => this._handleClick(e, index)
      });

      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{l.date}</td>
          <td>{l.productName}</td>
          <td>{l.quantity}</td>
          <td>{l.supplier}</td>
          <td>{l.price}</td>
          <td {...args}>
            <button className="btn btn-large btn-positive">
              Edit
            </button>
          </td>
        </tr>
      );
    });

		return (
		  <div className="pane padded-bottom-more">
        <table className="table-striped">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Date</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Supplier</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderTable}
          </tbody>
        </table>
        {showEditOption && (
          <EditEntry
            clickedEditButton={clickedEditButton}
            {...props}
          />
        )}
      </div>
		);
	}
}
