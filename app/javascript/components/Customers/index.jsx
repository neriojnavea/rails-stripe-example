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
      customers: [],
      currentCustomer: {},
      showCreateCustomerForm: false,
    };
  }

  componentDidMount() {
    this.updateCustomers();
  }

  updateCustomers = () => {
    axios.get('/api/customers')
      .then((response) => {
        this.setState({
          customers: response.data.customers,
        });
      });
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
    axios.put(`/api/customers/${customerId}`, {
      customer: currentCustomer,
    }).then(() => {
      this.setState({
        showEditCustomerForm: false,
      });
      this.updateCustomers();
    });
  }

  handleDeleteCustomer = (customer) => {
    const customers = this.state.customers.slice();

    axios.delete(`/api/customers/${customer.id}`).then(() => {
      this.updateCustomers();
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
    axios.post('/api/customers', {
      customer: currentCustomer,
    }).then(response => {
      this.updateCustomers();

      this.setState({
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
    const { user } = this.props;
    const { customers, showCreateCustomerForm, currentCustomer, showEditCustomerForm } = this.state;
    return (
      <div>
        <Card title="Clientes">
          <div className="col-md">
            { user.role == "admin" &&
                <Button
                  text="+ Cliente"
                  primary
                  onClick={this.handleAddCustomerClick}
                />
            }
          </div>
          <HoverableTable className="mt-4">
            <thead>
              <tr>
                <Th>Cedula/Rif</Th>
                <Th>Razon Social</Th>
                <Th>Direccion</Th>
                <Th>Correo</Th>
                <Th>Celular</Th>
                { user.role == "admin" &&
                    <Th>Accion</Th>
                }
              </tr>
            </thead>
            <tbody>
              {customers.map(customer =>
                <CustomerRow
                  customer={customer}
                  onClickEditCustomer={this.handleEditCustomer}
                  onClickDeleteCustomer={this.handleDeleteCustomer}
                  user={user}
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
