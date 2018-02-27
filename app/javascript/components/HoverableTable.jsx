import React from 'react';
import PropTypes from 'prop-types';

const HoverableTable = ({ children, className }) => (
  <table className={`table table-hover ${className}`}>
    {children}
  </table>
);

HoverableTable.defaultProps = {
  className: '',
}

HoverableTable.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};

export default HoverableTable;
