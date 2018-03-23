import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import NumberFormat from 'react-number-format';

const CustomerRow = ({ user, customer, onClickDeleteCustomer, onClickEditCustomer}) => {
  const onClickDelete = () => onClickDeleteCustomer(customer);
  const onClickEdit = () => onClickEditCustomer(customer);
  return (
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
        { user.role == "admin" &&
            <Button
              text="Editar"
              small
              outlineSecundary
              className="ml-1"
              onClick={onClickEdit}
            />
        }
        { user.role == "admin" &&
            <Button
              text="Eliminar"
              small
              outlineSecundary
              className="ml-1"
              onClick={onClickDelete}
            />
        }
      </td>
    </tr>
  )
};

CustomerRow.propTypes = {
  customer: PropTypes.object.isRequired,
  onClickDeleteCustomer: PropTypes.func.isRequired,
};

export default CustomerRow;
