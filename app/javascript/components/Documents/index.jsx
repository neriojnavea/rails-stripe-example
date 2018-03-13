import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Card from 'components/Card';
import HoverableTable from 'components/HoverableTable';
import Th from 'components/Table/Th';
import axios from 'axios';
import {
  getAllResources,
} from 'services/ajaxHandler';
import DocumentRow from './DocumentRow';
import New from './New';
import Edit from './Edit';
import moment from 'moment';

export default class Documents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docs: [],
      customers: [],
      currentDocument: {},
      showCreateDocumentForm: false,
    };
  }

  componentDidMount() {
    this.updateDocuments();
    this.updateCustomers();
  }

  updateDocuments = () => {
    axios.get('/api/documents')
      .then((response) => {
        this.setState({
          docs: response.data.documents,
        });
      });
  }

  updateCustomers = () => {
    axios.get('/api/customers')
      .then((response) => {
        this.setState({
          customers: response.data.customers,
        });
      });
  }

  handleClickDoneDocument = (docId, value) => {
    axios.put(`/api/documents/${docId}`, { done: value })
      .then(() => this.updateDocuments())
  }

  handleCancelEditDocumentForm = () => {
    this.setState({
      showEditDocumentForm: false,
    })
  }

  handleSaveEditDocument = (docId) => {
    const { currentDocument } = this.state;
    const docs = this.state.documents.slice();
    const doc = documents.find(document => document.id == documentId);
    axios.put(`/api/docs/${documentId}`, {
      doc: currentDocument,
    }).then(() => {
      docs[documents.indexOf(document)] = currentDocument;

      this.setState({
        docs,
        showEditDocumentForm: false,
      });
    });
  }

  handleDeleteDocument = (doc) => {
    axios.delete(`/api/documents/${doc.id}`).then(() => {
      this.updateDocuments();
    });
  }

  handleEditDocument = (doc) => {
    this.setState({
      currentDocument: doc,
      showCreateDocumentForm: false,
      showEditDocumentForm: true,
    });
  }

  handleAddDocumentClick = () => {
    const { showCreateDocumentForm } = this.state;
    this.setState({
      currentDocument: {},
      showCreateDocumentForm: true,
      showEditDocumentForm: false,
    });
  }

  handleCancelCreateDocumentForm = () => {
    const { showCreateDocumentForm } = this.state;
    this.setState({
      currentDocument: {},
      showCreateDocumentForm: false,
    });
  }

  handleSaveDocument = () => {
    const currentDocument = Object.assign({}, this.state.currentDocument);
    currentDocument.customer_id = currentDocument.customer_id.value;
    currentDocument.expiration_date = currentDocument.expiration_date.format();
    const docs = this.state.docs.slice();

    axios.post('/api/documents', {
      document: currentDocument,
    }).then(response => {
      docs.push(response.data.document);

      this.setState({
        docs,
        currentDocument: {},
        showCreateDocumentForm: false,
      });
    });
  }

  handleChangeDocument = (attribute, value) => {
    const currentDocument = Object.assign({}, this.state.currentDocument);
    currentDocument[attribute] = value;

    this.setState({
      currentDocument,
    })
  }

  render() {
    const { customers, docs, showCreateDocumentForm, currentDocument,
      showEditDocumentForm } = this.state;
    return (
      <div>
        <Card title="Documetos">
          <div className="col-md">
            <Button
              text="+ Documento"
              primary
              onClick={this.handleAddDocumentClick}
            />
          </div>
          <HoverableTable className="mt-4">
            <thead>
              <tr>
                <Th>Titulo</Th>
                <Th>Fecha de Expiracion</Th>
                <Th>Cliente</Th>
                <Th>Realizado</Th>
                <Th>Acciones</Th>
                <Th></Th>
              </tr>
            </thead>
            <tbody>
              {docs.map(document =>
                <DocumentRow
                  doc={document}
                  customers={customers}
                  onClickDoneDocument={this.handleClickDoneDocument}
                  onClickEditDocument={this.handleEditDocument}
                  onClickDeleteDocument={this.handleDeleteDocument}
                />)}
            </tbody>
          </HoverableTable>
        </Card>
        { showEditDocumentForm &&
            <Edit
              doc={currentDocument}
              customers={customers}
              onClickCancel={this.handleCancelEditDocumentForm}
              onClickSave={this.handleSaveEditDocument}
              onChangeDocument={this.handleChangeDocument}
            /> }
        { showCreateDocumentForm &&
            <New
              doc={currentDocument}
              onClickCancel={this.handleCancelCreateDocumentForm}
              onClickSave={this.handleSaveDocument}
              onChangeDocument={this.handleChangeDocument}
              customers={customers}
            /> }
      </div>
    )
  }
}

Documents.propTypes = {
  docs: PropTypes.array.isRequired,
}
