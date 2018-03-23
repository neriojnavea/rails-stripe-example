import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const IdInput = ({ id, placeholder, message, label, type, onChange, value }) => {
  const onChangeValue = (value) => {
    onChange(id, value.value);
  };
  return (
    <div className="form-group">
      <label for={id}>{label}</label>
      <NumberFormat
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onValueChange={onChangeValue}
        value={value}
        format="########-#"
      />
      <small className="form-text text-muted">{message}</small>
    </div>
  )
}

IdInput.defaultProps = {
  id: '',
  placeholder: '',
  message: '',
  label: '',
  value: '',
}

IdInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
}

export default IdInput;
