import React from 'react';
import PropTypes from 'prop-types';

const Th = ({ children }) => (
  <th scope="col">{children}</th>
)

Th.propTypes = {
  children: PropTypes.element.isRequired
};

export default Th;
