import React from 'react';
import PropTypes from 'prop-types';
import GeneralForm from 'components/Form';
import EmailInput from 'components/Form/EmailInput';
import Input from 'components/Form/Input';
import Button from 'components/Button';
import Select from 'components/Form/Select';
import DatePicker from 'components/Form/DatePicker';

const DocumentForm = ({ onClickCancel, onClickSave, onChangeDocument, doc, customers }) => {
  const handleClickSave = () => onClickSave(doc.id);
  const customersOptions = customers.map(customer => ({ value: customer, label: customer.name }))
  return (
    <GeneralForm>
      <Input
        label="Titulo"
        placeholder="Nombre del documento"
        id="title"
        onChange={onChangeDocument}
        value={doc.title}
      />
      <Select
        label="Cliente"
        options={customersOptions}
        id="customer_id"
        value={doc.customer_id}
        onChange={() => {}}
      />
      <DatePicker
        label="Fecha de vencimiento"
        placeholder="Fecha de vencimiento"
        id="expiration_date"
        value={doc.expiration_date}
        onChange={onChangeDocument}
        value={doc.rif}
      />
      <Button primary text="Guardar" onClick={handleClickSave}/>
      <Button danger text="Cancelar" className="ml-1" onClick={onClickCancel}/>
    </GeneralForm>
  )
}

DocumentForm.propTypes = {
  onClickCancel: PropTypes.func.isRequired,
}

export default DocumentForm;
