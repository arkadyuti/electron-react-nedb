import React, { Component, PropTypes } from 'react';
import FormInput from 'components/common/FormInput';

class EntryForm extends Component {
  constructor(props) {
    super(props);
    const { 
      slNoValue,
      dateValue,
      supplierValue,
      productIDValue,
      productNameValue,
      productDescriptionValue,
      quantityValue,
      PriceValue,
      defaultProductCatagorySelectedOption
    } = props;
    this.state= {
      slNoValue,
      dateValue,
      supplierValue,
      productIDValue,
      productNameValue,
      productDescriptionValue,
      quantityValue,
      PriceValue,
      defaultProductCatagorySelectedOption
    }
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

  _handleFormData = () => {
    const { props } = this;
    const { onSubmit } = props;

    if (typeof onSubmit === 'function') {
      onSubmit(e);
    }
  };

  _productCatagoryHandleChange = (e) => {
    const { value } = e.target;
    this.setState({
      defaultProductCatagorySelectedOption: value
    });
  }

  render() {
    const { state, props } = this;
    const { 
      slNoValue,
      dateValue,
      supplierValue,
      productIDValue,
      productNameValue,
      productDescriptionValue,
      quantityValue,
      PriceValue,
      defaultProductCatagorySelectedOption
    } = state;

    const { productCatagoryOptions } = props;
    
    const selectOptionOptionArr = productCatagoryOptions.map((item, key) => {
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
			<form className="" onSubmit={this._handleFormData}>
        <div className="form-group">
          <label>Sl No.</label>
          <FormInput type="text" ref="slNo" value={slNoValue}	className="form-control" placeholder="Sl No." />
        </div>
        <div className="form-group">
          <label>Date</label>
          <FormInput type="date"ref="date" value={dateValue} className="form-control" placeholder="Date"	/>
        </div>
        <div className="form-group">
          <label>Supplier</label>
          <FormInput type="text" value={supplierValue} className="form-control" placeholder="Supplier" ref="supplier"
          />
        </div>
        <div className="form-group">
          <label>Product ID</label>
          <FormInput type="text" value={productIDValue} className="form-control" ref= "productID" placeholder="Product ID" />
        </div>
        <div className="form-group">
          <label>Product Name</label>
          <FormInput type="text" className="form-control" value={productNameValue} ref= "productName" placeholder="Product Name" />
        </div>
        <div className="form-group">
          <label>Product Description</label>
          <textarea type="text" className="form-control"  value={productDescriptionValue} ref= "productDescription" placeholder="Product Description" />
        </div>
        <div className="form-group">
          <label>Product Catagory</label>
          <select className="form-control" ref= "productCatagory" value={defaultProductCatagorySelectedOption} onChange={this._productCatagoryHandleChange}>
            {selectOptionOptionArr}
          </select>
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <FormInput type="text" className="form-control" value={quantityValue} ref="quantity" placeholder="Quantity" />
        </div>
        <div className="form-group">
          <label>Price</label>
          <FormInput type="text" className="form-control"  ref="price" placeholder="Price" />
        </div>
        <div className="form-actions">
          <button type="reset" className="btn btn-form btn-default">Cancel</button>
          <button type="submit" className="btn btn-form btn-primary">OK</button>
        </div>
      </form>
		);
	}
}

EntryForm.propTypes = {
  onSubmit: PropTypes.func,
  slNoValue: PropTypes.string,
  dateValue: PropTypes.string,
  supplierValue: PropTypes.string,
  productIDValue: PropTypes.string,
  productNameValue: PropTypes.string,
  productDescriptionValue: PropTypes.string,
  quantityValue: PropTypes.string,
  PriceValue: PropTypes.string,
  productCatagoryOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({}), PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({}), PropTypes.string])
  })),
  defaultProductCatagorySelectedOption: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default EntryForm;

