import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';

const DatePicker = ({ id, placeholder, message, label, type, onChange, value }) => {
  const onChangeValue = (ev) => {
    onChange(id, ev.target.value);
  };
  return (
    <div className="form-group">
      <label for={id}>{label}</label>
      <ReactDatePicker
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={onChangeValue}
        selected={value}
      />
      <small className="form-text text-muted">{message}</small>
    </div>
  )
}

DatePicker.defaultProps = {
  id: '',
  placeholder: '',
  message: '',
  label: '',
  value: '',
}

DatePicker.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
}

export default DatePicker;
