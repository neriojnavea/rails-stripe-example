import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Card from 'components/Card';
import HoverableTable from 'components/HoverableTable';
import Th from 'components/Table/Th';
import axios from 'axios';
import CustomerRow from './CustomerRow';
import New from './New';
import Edit from './Edit';

export default class Customers extends React.Component {
  constructor(props) {
    super(props);
    const { customers } = this.props;

    this.state = {
      customers,
      currentCustomer: {},
      showCreateCustomerForm: false,
    };
  }

  handleCancelEditCustomerForm = () => {
    this.setState({
      showEditCustomerForm: false,
    })
  }

  handleSaveEditCustomer = (customerId) => {
    const { currentCustomer } = this.state;
    const customers = this.state.customers.slice();
    const customer = customers.find(customer => customer.id == customerId);
    axios.put(`/customers/${customerId}`, {
      customer: currentCustomer,
    }).then(() => {
      customers[customers.indexOf(customer)] = currentCustomer;

      this.setState({
        customers,
        showEditCustomerForm: false,
      });
    });
  }

  handleDeleteCustomer = (customer) => {
    const customers = this.state.customers.slice();

    axios.delete(`/customers/${customer.id}`).then(() => {
      customers.splice(customers.indexOf(customer), 1);

      this.setState({
        customers,
      });
    });
  }

  handleEditCustomer = (customer) => {
    this.setState({
      currentCustomer: customer,
      showCreateCustomerForm: false,
      showEditCustomerForm: true,
    });
  }

  handleAddCustomerClick = () => {
    const { showCreateCustomerForm } = this.state;
    this.setState({
      currentCustomer: {},
      showCreateCustomerForm: true,
      showEditCustomerForm: false,
    });
  }

  handleCancelCreateCustomerForm = () => {
    const { showCreateCustomerForm } = this.state;
    this.setState({
      currentCustomer: {},
      showCreateCustomerForm: false,
    });
  }

  handleSaveCustomer = () => {
    const { currentCustomer } = this.state;
    const customers = this.state.customers.slice();
    axios.post('./customers', {
      customer: currentCustomer,
    }).then(response => {
      customers.push(response.data.customer);

      this.setState({
        customers,
        currentCustomer: {},
        showCreateCustomerForm: false,
      });
    });
  }

  handleChangeCustomer = (attribute, value) => {
    const currentCustomer = Object.assign({}, this.state.currentCustomer);
    currentCustomer[attribute] = value;

    this.setState({
      currentCustomer,
    })
  }

  render() {
    const { customers, showCreateCustomerForm, currentCustomer, showEditCustomerForm } = this.state;
    return (
      <div>
        <Card title="Clientes">
          <div className="col-md">
            <Button
              text="+ Cliente"
              primary
              onClick={this.handleAddCustomerClick}
            />
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
              {customers.map(customer =>
                <CustomerRow
                  customer={customer}
                  onClickEditCustomer={this.handleEditCustomer}
                  onClickDeleteCustomer={this.handleDeleteCustomer}
                />)}
            </tbody>
          </HoverableTable>
        </Card>
        { showEditCustomerForm &&
            <Edit
              customer={currentCustomer}
              onClickCancel={this.handleCancelEditCustomerForm}
              onClickSave={this.handleSaveEditCustomer}
              onChangeCustomer={this.handleChangeCustomer}
            /> }
        { showCreateCustomerForm &&
            <New
              customer={currentCustomer}
              onClickCancel={this.handleCancelCreateCustomerForm}
              onClickSave={this.handleSaveCustomer}
              onChangeCustomer={this.handleChangeCustomer}
            /> }
      </div>
    )
  }
}

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
}
