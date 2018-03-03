import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, placeholder, message, label, type, onChange, value }) => {
  const onChangeValue = (ev) => {
    onChange(id, ev.target.value);
  };
  return (
    <div className="form-group">
      <label for={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={onChangeValue}
        value={value}
      />
      <small className="form-text text-muted">{message}</small>
    </div>
  )
}

Input.defaultProps = {
  id: '',
  placeholder: '',
  message: '',
  label: '',
  value: '',
}

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
}

export default Input;
