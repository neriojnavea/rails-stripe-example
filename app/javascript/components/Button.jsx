import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, small, primary, className, outlineSecundary }) => {
  const classes = [];
  small && classes.push('btn-sm');
  primary && classes.push('btn-primary');
  outlineSecundary && classes.push('btn-outline-secondary');
  return (
    <a
      href="#"
      className={`btn ${classes.join(' ')} ${className}`}
      onClick={onClick}
    >
      {text}
    </a>
  )
}

Button.defaultProps = {
  text: '',
  onClick: () => {},
  primary: false,
  small: false,
  outlineSecundary: false,
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  outlineSecundary: PropTypes.bool,
}

export default Button
