import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import DocumentForm from './DocumentForm';

const Edit = ({ onClickCancel, onClickSave, onChangeDocument, customer }) => (
  <Card title="Editar Documento">
    <div className="col-md">
      <DocumentForm
        customers={customers}
        onClickCancel={onClickCancel}
        onClickSave={onClickSave}
        onChangeDocument={onChangeDocument}
      />
    </div>
  </Card>
)

export default Edit;
