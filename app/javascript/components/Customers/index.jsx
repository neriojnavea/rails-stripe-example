import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Card from 'components/Card';
import HoverableTable from 'components/HoverableTable';
import Th from 'components/Table/Th';
import CustomerRow from './CustomerRow';

const Customers = ({ customers }) => (
  <div>
    <Card title="Customers">
      <div className="col-md">
        <Button text="+ Cliente" primary />
      </div>
      <HoverableTable className="mt-4">
        <thead>
          <tr>
            <Th>Cedula/Rif</Th>
            <Th>Razon Social</Th>
            <Th>Direccion</Th>
            <Th>Correo</Th>
            <Th>Celular</Th>
            <Th>Accion</Th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => <CustomerRow customer={customer} />)}
        </tbody>
      </HoverableTable>
    </Card>
  </div>
)

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
}
export default Customers;

