import React from 'react';
import PropTypes from 'prop-types';
import GeneralForm from 'components/Form';
import EmailInput from 'components/Form/EmailInput';
import Input from 'components/Form/Input';
import PhoneInput from 'components/Form/PhoneInput';
import IdInput from 'components/Form/IdInput';
import Button from 'components/Button';

const CustomerForm = ({ onClickCancel, onClickSave, onChangeCustomer, customer }) => {
  const handleClickSave = () => onClickSave(customer.id);
  return (
    <GeneralForm>
      <IdInput
        label="Cedula/Rif"
        placeholder="Nombre del cliente"
        id="rif"
        onChange={onChangeCustomer}
        value={customer.rif}
      />
      <Input
        label="Nombre/Razon Social"
        placeholder="Nombre del cliente"
        id="name"
        onChange={onChangeCustomer}
        value={customer.name}
      />
      <Input
        label="Direccion"
        placeholder="Direccion del cliente"
        id="address"
        onChange={onChangeCustomer}
        value={customer.address}
      />
      <EmailInput
        label="Correo"
        placeholder="Correo del cliente"
        id="email"
        onChange={onChangeCustomer}
        value={customer.email}
      />
      <PhoneInput
        label="Celular"
        placeholder="Celular del cliente"
        id="phone"
        onChange={onChangeCustomer}
        value={customer.phone}
      />
      <Button primary text="Guardar" onClick={handleClickSave}/>
      <Button danger text="Cancelar" className="ml-1" onClick={onClickCancel}/>
    </GeneralForm>
  )
}

CustomerForm.propTypes = {
  onClickCancel: PropTypes.func.isRequired,
}

export default CustomerForm;
