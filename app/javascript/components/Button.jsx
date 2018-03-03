import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, small, primary, className, outlineSecundary, href, danger }) => {
  const classes = [];
  small && classes.push('btn-sm');
  primary && classes.push('btn-primary');
  danger && classes.push('btn-danger');
  outlineSecundary && classes.push('btn-outline-secondary');
  return (
    <a
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
  danger: false,
  href: '/',
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  outlineSecundary: PropTypes.bool,
  href: PropTypes.string,
}

export default Button
