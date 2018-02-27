import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import NumberFormat from 'react-number-format';

const CustomerRow = ({customer}) => (
  <tr>
    <th scope="row">{customer.rif}</th>
    <td>{customer.name}</td>
    <td>{customer.address}</td>
    <td>{customer.email}</td>
    <td>
      <NumberFormat
        value={customer.phone}
        format="####-###-####"
        displayType="text"
      />
    </td>
    <td>
      <Button text="Editar" small outlineSecundary className="ml-1" />
      <Button text="Eliminar" small outlineSecundary className="ml-1" />
    </td>
  </tr>
);

CustomerRow.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default CustomerRow;
