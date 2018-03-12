import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import NumberFormat from 'react-number-format';

const DocumentRow = ({doc, onClickDeleteDocument, onClickEditDocument, customers,
  onClickDoneDocument}) => {
    const onClickDelete = () => onClickDeleteDocument(doc);
    const onClickEdit = () => onClickEditDocument(doc);
    const customerName = (customerId) => {
      const customer = customers.find(customer => doc.customer_id === customer.id)
      return customer == undefined ? 'Ninguno' : customer.name;
    }
    const handleClickDoneDocument = () => {
      onClickDoneDocument(doc.id, !doc.done);
    }
    return (
      <tr>
        <td>{doc.title}</td>
        <td>{doc.expiration_date}</td>
        <td>{customerName(doc.customer_id)}</td>
        <td>
          <input type='checkbox' checked={doc.done} onChange={handleClickDoneDocument} />
        </td>
      </tr>
    )
};

DocumentRow.propTypes = {
  doc: PropTypes.object.isRequired,
  onClickDeleteDocument: PropTypes.func.isRequired,
};

export default DocumentRow;
