import React, { Component, PropTypes } from 'react';
import FormInput from 'components/common/FormInput';

class EntryForm extends Component {
  constructor(props) {
    super(props);
    const { 
      slNo,
      date,
      supplier,
      productID,
      productName,
      productDescription,
      quantity,
      price,
      defaultProductCatagorySelectedOption
    } = props;
    this.state= {
      slNo,
      date,
      supplier,
      productID,
      productName,
      productDescription,
      quantity,
      price,
      defaultProductCatagorySelectedOption
    };
  }

  static className = 'entry-form';

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(/* nextProps, nextState */) {
  }

  componentWillUpdate(/* nextProps, nextState */) {
  }

  componentDidUpdate(/* prevProps, prevState */) {
  }

  componentWillUnmount() {
  }

  _handleFormData = (e) => {
    const { props, __form } = this;
    const { onSubmit } = props;

    if (typeof onSubmit === 'function') {
      onSubmit(e, __form);
    }
  };
  _clearForm = (e) => {
    e.currentTarget.parentElement.parentElement.reset();
    this.setState({
      slNoValue : "",
      dateValue : "",
      supplierValue : "",
      productIDValue : "",
      productNameValue : "",
      productDescriptionValue : "",
      quantityValue : "",
      PriceValue : "",
      defaultProductCatagorySelectedOption : ""
    })
  };
  _productCatagoryHandleChange = (e) => {
    const { value } = e.target;
    this.setState({
      defaultProductCatagorySelectedOption: value
    });
  };

  _updateSlNo = (e) => {
    const { value } = e.target;
    
    this.setState({
      slNo: value
    });
  };
  _updateDate = (e) => {
    const { value } = e.target;
    
    this.setState({
      date: value
    });
  };
  _updateSupplier = (e) => {
    const { value } = e.target;
    
    this.setState({
      supplier: value
    });
  };
  _updateProductID = (e) => {
    const { value } = e.target;
    
    this.setState({
      productID: value
    });
  };
  _updateProductName = (e) => {
    const { value } = e.target;
    
    this.setState({
      productName: value
    });
  };

  _updateProductDescription = (e) => {
    const { value } = e.target;
    
    this.setState({
      productDescription: value
    });
  };

  _updateQuantity = (e) => {
    const { value } = e.target;
    
    this.setState({
      quantity: value
    });
  };
  _updatePrice = (e) => {
    const { value } = e.target;
    
    this.setState({
      price: value
    });
  };

  render() {
    const { state, props } = this;
    const { 
      slNo,
      date,
      supplier,
      productID,
      productName,
      productDescription,
      quantity,
      price,
      defaultProductCatagorySelectedOption
    } = state;

    const { productCatagoryOptions, formRef } = props;
    
    const selectOptionOptionArr = productCatagoryOptions && productCatagoryOptions.map((item, key) => {
      const args = Object.assign({}, {
        id: `option-${key}`,
        key: `option-${key}`,
        value: item.value
      });
      return (
        <option {...args} >{item.label}</option>
      );
    });

		return(
			<form className="" onSubmit={this._handleFormData} ref={c => { this.__form = c; return this.__form; }}>
        <div className="form-group">
          <label>Sl No.</label>
          <FormInput type="text" ref="slNo" value={slNo}	className="form-control" placeholder="Sl No." onChange={this._updateSlNo} />
        </div>
        <div className="form-group">
          <label>Date</label>
          <FormInput type="date"ref="date" value={date} className="form-control" placeholder="Date" onChange={this._updateDate}	/>
        </div>
        <div className="form-group">
          <label>Supplier</label>
          <FormInput type="text" value={supplier} className="form-control" placeholder="Supplier" ref="supplier" onChange={this._updateSupplier}/>
        </div>
        <div className="form-group">
          <label>Product ID</label>
          <FormInput type="text" value={productID} className="form-control" ref= "productID" placeholder="Product ID" onChange={this._updateProductID} />
        </div>
        <div className="form-group">
          <label>Product Name</label>
          <FormInput type="text" className="form-control" value={productName} ref= "productName" placeholder="Product Name" onChange={this._updateProductName} />
        </div>
        <div className="form-group">
          <label>Product Description</label>
          <textarea type="text" className="form-control"  value={productDescription} ref= "productDescription" placeholder="Product Description" onChange={this._updateProductDescription} />
        </div>
        <div className="form-group">
          <label>Product Catagory</label>
          <select className="form-control" ref= "productCatagory" value={defaultProductCatagorySelectedOption} onChange={this._productCatagoryHandleChange}>
            {selectOptionOptionArr}
          </select>
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <FormInput type="text" className="form-control" value={quantity} ref="quantity" placeholder="Quantity" onChange={this._updateQuantity} />
        </div>
        <div className="form-group">
          <label>Price</label>
          <FormInput type="text" value={price} className="form-control"  ref="price" placeholder="Price" onChange={this._updatePrice} />
        </div>
        <div className="form-actions">
          <button type="reset" className="btn btn-form btn-default" onClick={this._clearForm}>Cancel</button>
          <button type="submit" className="btn btn-form btn-primary">OK</button>
        </div>
      </form>
		);
	}
}

EntryForm.propTypes = {
  onSubmit: PropTypes.func,
  slNo: PropTypes.string,
  date: PropTypes.string,
  supplier: PropTypes.string,
  productID: PropTypes.string,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
  quantity: PropTypes.string,
  price: PropTypes.string,
  productCatagoryOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({}), PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({}), PropTypes.string])
  })),
  defaultProductCatagorySelectedOption: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default EntryForm;

