import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Form/Input';

const EmailInput = ({ id, placeholder, message, label, onChange, value }) => (
  <Input
    id={id}
    placeholder={placeholder}
    message={message}
    label={label}
    type="email"
    value={value}
    onChange={onChange}
  />
)

EmailInput.defaultProps = {
  id: '',
  placeholder: '',
  message: '',
  label: '',
  value: '',
}

EmailInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
}

export default EmailInput;
