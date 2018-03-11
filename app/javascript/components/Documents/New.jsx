import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import DocumentForm from './DocumentForm';

const New = ({ onClickCancel, onClickSave, onChangeDocument, doc, customers }) => (
  <Card title="Nuevo Documento">
    <div className="col-md">
      <DocumentForm
        doc={doc}
        customers={customers}
        onClickCancel={onClickCancel}
        onClickSave={onClickSave}
        onChangeDocument={onChangeDocument}
      />
    </div>
  </Card>
)

export default New;
