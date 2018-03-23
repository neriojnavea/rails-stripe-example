import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import NumberFormat from 'react-number-format';
import moment from 'moment';

const DocumentRow = ({doc, onClickDeleteDocument, onClickEditDocument, customers,
  onClickDoneDocument, user}) => {
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
        <td>
          {doc.title}
        </td>
        <td>{doc.expiration_date}</td>
        <td>{customerName(doc.customer_id)}</td>
        <td>
          { user.role == "admin" &&
              <input type='checkbox' checked={doc.done} onChange={handleClickDoneDocument} />
          }
          { moment(doc.expiration_date).isBefore(moment()) && !doc.done &&
              <span className="badge badge-danger ml-1">
                Expirado
              </span> }
          { doc.done &&
              <span className="badge badge-success ml-1">
                Realizado
              </span> }
          { !moment(doc.expiration_date).isBefore(moment()) && !doc.done &&
              <span className="badge badge-warning ml-1">
                Pendiente
              </span> }
        </td>
        <td>
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

DocumentRow.propTypes = {
  doc: PropTypes.object.isRequired,
  onClickDeleteDocument: PropTypes.func.isRequired,
};

export default DocumentRow;
