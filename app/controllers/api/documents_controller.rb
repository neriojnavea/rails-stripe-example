class Api::DocumentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: { documents: Document.all }, status: 200
  end

  def create
    document = Document.create!(document_params)
    render json: { document: document }, status: :created
  end

  def update
    document = Document.find(params[:id])
    if document.update(document_params)
      render json: { document: document }, status: :ok
    else
      render json: { error: 'Error editando el cliente' }, status: 422
    end
  end

  def destroy
    Document.find(params[:id]).destroy
  end

  private

  def document_params
    params.require(:document).permit(%i(title date expiration_date customer_id done))
  end
end
