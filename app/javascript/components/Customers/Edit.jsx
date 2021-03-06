import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import CustomerForm from './CustomerForm';

const Edit = ({ onClickCancel, onClickSave, onChangeCustomer, customer }) => (
  <Card title="Editar Cliente">
    <div className="col-md">
      <CustomerForm
        customer={customer}
        onClickCancel={onClickCancel}
        onClickSave={onClickSave}
        onChangeCustomer={onChangeCustomer}
      />
    </div>
  </Card>
)

export default Edit;
