import React, { Component, PropTypes } from 'react';

class FormInput extends Component {
  constructor(props) {
    super(props);

    let { defaultValue, value } = props;
    defaultValue = (typeof defaultValue === 'undefined' || defaultValue === null) ? '' : defaultValue;
    value = (typeof value === 'undefined' || value === null) ? defaultValue : value;

    const state = {
      isValid: true,
      value // A controlled component must specify a non-null and non-undefined value here for values.  See https://github.com/facebook/react/issues/6779#issuecomment-222162404
    };

    this.state = state;
  }

  static className = 'form-text-box';

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;

    const nextState = {
      value
    };

    this.setState(nextState);
  }

  componentWillUpdate(/* nextProps, nextState */) {
  }

  componentDidUpdate(/* prevProps, prevState */) {
  }

  componentWillUnmount() {
  }

  _onInputChange = (e) => {
    e.persist();

    const { props } = this;

    const { onChange } = props;

    const { value } = e.target;

    const nextState = {
      value
    };

    this.setState(nextState, () => {
      if (typeof onChange === 'function') {
        onChange(e);
      }
    });
  };

  _onKeyDown = (e) => {
    e.persist();
    const { props } = this;

    const { onKeyDown } = props;

    if (typeof onKeyDown === 'function') {
      onKeyDown(e);
    }
  };

  _onInputWheel = (e) => {
    e.persist();

    const { props } = this;

    const { onWheel, type } = props;

    if (type === 'number') {
      e.preventDefault();
    }

    if (typeof onWheel === 'function') {
      onWheel(e);
    }
  };


  render() {
    const { constructor, props, state } = this;

    const thisClassName = constructor.className;

    const {
      className,
      defaultValue,
      id, // Declaring here to prevent from showing up in input...rest spread.
      maxLength,
      name,
      onValidate,
      onWheel,
      placeholder,
      required,
      textType,
      type,
      disabled,
      ...rest
     } = props;

    let { value = defaultValue } = state;

    value = value && (typeof value !== 'string' ? value.toString() : value);

    if (value && maxLength && value.length > maxLength) { // This check is necessary because for some reason, at least in Chrome browser, the undo state can eventually lead to allowing a value in the input element that exceeds the length allowed natively by maxLength.
      value = value.toString().substr(0, maxLength);
    }

    return (
      <input
        {...rest}
        className={`${thisClassName} ${className}`}
        type={type}
        disabled={disabled}
        onChange={this._onInputChange}
        onWheel={this._onInputWheel}
        onKeyDown={this._onKeyDown}
        placeholder={placeholder}
        id={id}
        required={required}
        name={name}
        value={value}
        maxLength={maxLength}
        ref={input => {
          this.__inputElement = input;
          return input;
        }}
      />
    );
  }
}

FormInput.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  isValid: PropTypes.bool,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onWheel: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  required: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
  textType: PropTypes.string,
  type: PropTypes.string,
  validationErrorStateValue: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pattern: PropTypes.string,
  emailVal: PropTypes.string
};

FormInput.defaultProps = {
  type: 'text'
};

export default FormInput;
