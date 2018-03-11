import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import NumberFormat from 'react-number-format';

const DocumentRow = ({doc, onClickDeleteDocument, onClickEditDocument}) => {
  const onClickDelete = () => onClickDeleteDocument(doc);
  const onClickEdit = () => onClickEditDocument(doc);
  return (
    <tr>
      <td>{doc.title}</td>
      <td>{doc.expiration_date.format()}</td>
      <td>{doc.customer.name}</td>
      <td>
        <input type='checkbox'/>
      </td>
    </tr>
  )
};

DocumentRow.propTypes = {
  doc: PropTypes.object.isRequired,
  onClickDeleteDocument: PropTypes.func.isRequired,
};

export default DocumentRow;
